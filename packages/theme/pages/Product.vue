<template>
  <div id="product">
    <SfBreadcrumbs
      v-if="!productDataIsLoading"
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <div
      v-if="!productDataIsLoading"
      class="product"
    >
      <LazyHydrate when-idle>
        <SfGallery
          :images="productGallery"
          class="product__gallery"
        />
      </LazyHydrate>

      <div class="product__info">
        <div class="product__header">
          <SfHeading
            :title="productGetters.getName(product)"
            :level="3"
            class="sf-heading--no-underline sf-heading--left"
          />
          <SfIcon
            icon="drag"
            size="xxl"
            color="var(--c-text-disabled)"
            class="product__drag-icon smartphone-only"
          />
        </div>
        <div class="product__price-and-rating">
          <SfPrice
            :regular="$n(productGetters.getPrice(product).regular, 'currency')"
            :special="productGetters.getPrice(product).special && $n(productGetters.getPrice(product).special, 'currency')"
          />
          <div>
            <div class="product__rating">
              <SfRating
                :score="averageRating"
                :max="5"
              />
              <a
                v-if="!!totalReviews"
                href="#"
                class="product__count"
              >
                ({{ totalReviews }})
              </a>
            </div>
            <SfButton class="sf-button--text">
              {{ $t('Read all reviews') }}
            </SfButton>
          </div>
        </div>
        <div>
          <p
            v-if="productShortDescription"
            v-dompurify-html="productShortDescription"
            class="product__description desktop-only"
          />
          <SfButton class="sf-button--text desktop-only product__guide">
            {{ $t('Size guide') }}
          </SfButton>
          <SfSelect
            v-if="options.size"
            :value="configuration.size"
            label="Size"
            class="sf-select--underlined product__select-size"
            :required="true"
            @input="size => updateFilter({ size })"
          >
            <SfSelectOption
              v-for="size in options.size"
              :key="size.value"
              :value="size.value"
            >
              {{ size.label }}
            </SfSelectOption>
          </SfSelect>
          <div
            v-if="options.color && options.color.length > 1"
            class="product__colors desktop-only"
          >
            <p class="product__color-label">
              {{ $t('Color') }}:
            </p>
            <SfColor
              v-for="(color, i) in options.color"
              :key="i"
              :color="color.value"
              class="product__color"
              @click="updateFilter({color})"
            />
          </div>
          <SfAddToCart
            v-model="qty"
            v-e2e="'product_add-to-cart'"
            :disabled="loading"
            :can-add-to-cart="canAddToCart"
            class="product__add-to-cart"
            @click="addItem({ product, quantity: parseInt(qty) })"
          />
        </div>

        <LazyHydrate when-idle>
          <SfTabs
            :open-tab="1"
            class="product__tabs"
          >
            <SfTab title="Description">
              <div
                v-if="productDescription"
                v-dompurify-html="productDescription"
                class="product__description"
              />
              <!-- @TODO: Check Property in Configurable Products              -->
              <!--              <SfProperty
                v-for="(property, i) in properties"
                :key="i"
                :name="property.name"
                :value="property.value"
                class="product__property"
              >
                <template
                  v-if="property.name === 'Category'"
                  #value
                >
                  <SfButton class="product__property__button sf-button&#45;&#45;text">
                    {{ property.value }}
                  </SfButton>
                </template>
              </SfProperty>-->
            </SfTab>
            <SfTab title="Read reviews">
              <SfReview
                v-for="review in reviews"
                :key="reviewGetters.getReviewId(review)"
                :author="reviewGetters.getReviewAuthor(review)"
                :date="reviewGetters.getReviewDate(review)"
                :message="reviewGetters.getReviewMessage(review)"
                :max-rating="5"
                :rating="reviewGetters.getReviewRating(review)"
                :char-limit="250"
                read-more-text="Read more"
                hide-full-text="Read less"
                class="product__review"
              />
            </SfTab>
            <SfTab
              title="Additional Information"
              class="product__additional-info"
            >
              <div class="product__additional-info">
                <p class="product__additional-info__title">
                  {{ $t('Instruction1') }}
                </p>
                <p class="product__additional-info__paragraph">
                  {{ $t('Instruction2') }}
                </p>
                <p class="product__additional-info__paragraph">
                  {{ $t('Instruction3') }}
                </p>
              </div>
            </SfTab>
          </SfTabs>
        </LazyHydrate>
      </div>
    </div>

    <div
      v-else
      class="product-loader"
    >
      <SfLoader />
    </div>

    <LazyHydrate
      v-if="relatedProducts.length"
      when-visible
    >
      <ProductsCarousel
        :products="relatedProducts"
        :title="$t('Match it with')"
      />
    </LazyHydrate>

    <LazyHydrate
      v-if="upsellProducts.length"
      when-visible
    >
      <ProductsCarousel
        :products="upsellProducts"
        :title="$t('Other products you might like')"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <InstagramFeed />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <MobileStoreBanner />
    </LazyHydrate>
  </div>
</template>
<script>
import {
  SfAddToCart,
  SfAlert,
  SfBanner,
  SfBreadcrumbs,
  SfButton,
  SfColor,
  SfGallery,
  SfHeading,
  SfIcon,
  SfImage,
  SfLoader,
  SfPrice,
  SfProperty,
  SfRating,
  SfReview,
  SfSelect,
  SfSticky,
  SfTabs,
} from '@storefront-ui/vue';
import { ref, computed } from '@vue/composition-api';
import { onSSR } from '@vue-storefront/core';
import LazyHydrate from 'vue-lazy-hydration';
import {
  useProduct,
  useCart,
  productGetters,
  useReview,
  reviewGetters,
} from '@vue-storefront/magento';
import InstagramFeed from '~/components/InstagramFeed.vue';
import MobileStoreBanner from '~/components/MobileStoreBanner.vue';
import ProductsCarousel from '~/components/ProductsCarousel.vue';
import { useVueRouter } from '../helpers/hooks/useVueRouter';

export default {
  name: 'Product',
  components: {
    InstagramFeed,
    LazyHydrate,
    MobileStoreBanner,
    ProductsCarousel,
    SfAddToCart,
    SfAlert,
    SfBanner,
    SfBreadcrumbs,
    SfButton,
    SfColor,
    SfGallery,
    SfHeading,
    SfIcon,
    SfImage,
    SfLoader,
    SfPrice,
    SfProperty,
    SfRating,
    SfReview,
    SfSelect,
    SfSticky,
    SfTabs,
  },
  transition: 'fade',
  setup(props, context) {
    const qty = ref(1);
    const { route } = useVueRouter();
    const { id } = route.params;
    const { products, search, loading: productLoading } = useProduct(`product-${id}`);
    const { addItem, loading } = useCart();
    const { reviews: productReviews, search: searchReviews, loading: reviewsLoading } = useReview(`productReviews-${id}`);

    const productDataIsLoading = computed(() => reviewsLoading.value || productLoading.value);

    const product = computed(() => {
      const baseProduct = Array.isArray(products.value?.items) && products.value?.items[0] ? products.value?.items[0] : {};

      return productGetters.getFiltered(baseProduct, {
        master: true,
        attributes: context.root.$route.query,
      });
    });

    const productShortDescription = computed(() => product.value.short_description?.html || '');
    const productDescription = computed(() => product.value.description?.html || '');

    const canAddToCart = computed(() => {
      const inStock = product.value.stock_status || '';

      const stockLeft = product.value.only_x_left_in_stock === null ? true : qty.value <= product.value.only_x_left_in_stock;

      return inStock && stockLeft;
    });

    const options = computed(() => productGetters.getAttributes(products.value, ['color', 'size']));
    const configuration = computed(() => productGetters.getAttributes(product.value, ['color', 'size']));
    const categories = computed(() => productGetters.getCategoryIds(product.value));

    const relatedProducts = computed(() => productGetters.getProductRelatedProduct(product.value));
    const upsellProducts = computed(() => productGetters.getProductUpsellProduct(product.value));

    const baseReviews = computed(() => [...productReviews.value].shift());
    const reviews = computed(() => reviewGetters.getItems(baseReviews.value));
    const totalReviews = computed(() => reviewGetters.getTotalReviews(baseReviews.value));
    const averageRating = computed(() => reviewGetters.getAverageRating(baseReviews.value));

    const breadcrumbs = computed(() => {
      const productCategories = product.value.categories;
      return productGetters.getBreadcrumbs(product.value,
        Array.isArray(productCategories) ? [...productCategories].pop() : []);
    });

    const productGallery = computed(() => productGetters.getGallery(product.value)
      .map((img) => ({
        mobile: { url: img.small },
        desktop: { url: img.normal },
        big: { url: img.big },
        alt: product.value._name || product.value.name,
      })));

    onSSR(async () => {
      const baseSearchQuery = {
        filter: {
          sku: {
            eq: id,
          },
        },
      };

      await search({
        queryType: 'DETAIL',
        ...baseSearchQuery,
      });

      await searchReviews({ ...baseSearchQuery });
    });

    const updateFilter = (filter) => {
      context.root.$router.push({
        path: context.root.$route.path,
        query: {
          ...configuration.value,
          ...filter,
        },
      });
    };

    return {
      addItem,
      averageRating,
      breadcrumbs,
      canAddToCart,
      categories,
      configuration,
      loading,
      options,
      product,
      productDescription,
      productGallery,
      productGetters,
      productDataIsLoading,
      productShortDescription,
      qty,
      relatedProducts,
      reviewGetters,
      reviews,
      totalReviews,
      updateFilter,
      upsellProducts,
    };
  },
};
</script>

<style lang="scss" scoped>
#product {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
    margin: 0 auto;
  }
}

.product-loader {
  height: 38px; margin: var(--spacer-base) auto var(--spacer-lg)
}

.product {
  @include for-desktop {
    display: flex;
  }

  &__info {
    margin: var(--spacer-sm) auto;
    @include for-desktop {
      max-width: 32.625rem;
      margin: 0 0 0 7.5rem;
    }
  }

  &__header {
    --heading-title-color: var(--c-link);
    --heading-title-font-weight: var(--font-weight--bold);
    --heading-padding: 0;
    margin: 0 var(--spacer-sm);
    display: flex;
    justify-content: space-between;
    @include for-desktop {
      --heading-title-font-weight: var(--font-weight--semibold);
      margin: 0 auto;
    }
  }

  &__drag-icon {
    animation: moveicon 1s ease-in-out infinite;
  }

  &__price-and-rating {
    margin: 0 var(--spacer-sm) var(--spacer-base);
    align-items: center;
    @include for-desktop {
      display: flex;
      justify-content: space-between;
      margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
    }
  }

  &__rating {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--spacer-xs) 0 var(--spacer-xs);
  }

  &__count {
    @include font(
        --count-font,
        var(--font-weight--normal),
        var(--font-size--sm),
        1.4,
        var(--font-family--secondary)
    );
    color: var(--c-text);
    text-decoration: none;
    margin: 0 0 0 var(--spacer-xs);
  }

  &__description {
    @include font(
        --product-description-font,
        var(--font-weight--light),
        var(--font-size--base),
        1.6,
        var(--font-family--primary)
    );
  }

  &__select-size {
    margin: 0 var(--spacer-sm);
    @include for-desktop {
      margin: 0;
    }
  }

  &__colors {
    @include font(
        --product-color-font,
        var(--font-weight--normal),
        var(--font-size--lg),
        1.6,
        var(--font-family--secondary)
    );
    display: flex;
    align-items: center;
    margin-top: var(--spacer-xl);
  }

  &__color-label {
    margin: 0 var(--spacer-lg) 0 0;
  }

  &__color {
    margin: 0 var(--spacer-2xs);
  }

  &__add-to-cart {
    margin: var(--spacer-base) var(--spacer-sm) 0;
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }

  &__guide,
  &__compare,
  &__save {
    display: block;
    margin: var(--spacer-xl) 0 var(--spacer-base) auto;
  }

  &__compare {
    margin-top: 0;
  }

  &__tabs {
    --tabs-title-z-index: 0;
    margin: var(--spacer-lg) auto var(--spacer-2xl);
    --tabs-title-font-size: var(--font-size--lg);
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }

  &__property {
    margin: var(--spacer-base) 0;

    &__button {
      --button-font-size: var(--font-size--base);
    }
  }

  &__review {
    padding-bottom: 24px;
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);
  }

  &__additional-info {
    color: var(--c-link);
    @include font(
        --additional-info-font,
        var(--font-weight--light),
        var(--font-size--sm),
        1.6,
        var(--font-family--primary)
    );

    &__title {
      font-weight: var(--font-weight--normal);
      font-size: var(--font-size--base);
      margin: 0 0 var(--spacer-sm);

      &:not(:first-child) {
        margin-top: 3.5rem;
      }
    }

    &__paragraph {
      margin: 0;
    }
  }

  &__gallery {
    flex: 1;
  }
}

.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}

@keyframes moveicon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 30%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
