<template>
  <div>
    <SfMegaMenu
      :visible="isSearchOpen"
      :title="$t('Search results')"
      class="search"
    >
      <transition
        name="sf-fade"
        mode="out-in"
      >
        <div
          v-if="products && products.length > 0"
          key="results"
          class="search__wrapper-results"
        >
          <SfMegaMenuColumn
            :title="$t('Categories')"
            class="sf-mega-menu-column--pined-content-on-mobile search__categories"
          >
            <template #title="{title}">
              <SfMenuItem
                :label="title"
                @click="megaMenu.changeActive(title)"
              >
                <template #mobile-nav-icon>
                  &#8203;
                </template>
              </SfMenuItem>
            </template>
            <SfList
              v-if="categories.length"
            >
              <SfListItem
                v-for="(category, key) in categories"
                :key="key"
              >
                <SfMenuItem
                  :label="category.label"
                  :link="th.getAgnosticCatLink(category)"
                >
                  <template #mobile-nav-icon>
                    &#8203;
                  </template>
                </SfMenuItem>
              </SfListItem>
            </SfList>
          </SfMegaMenuColumn>
          <SfMegaMenuColumn
            :title="$t('Product suggestions')"
            class="sf-mega-menu-column--pined-content-on-mobile search__results"
          >
            <template #title="{title}">
              <SfMenuItem
                :label="title"
                class="sf-mega-menu-column__header search__header"
              >
                <template #mobile-nav-icon>
                  &#8203;
                </template>
              </SfMenuItem>
            </template>
            <SfScrollable
              class="results--desktop desktop-only"
              show-text=""
              hide-text=""
            >
              <div class="results-listing">
                <SfProductCard
                  v-for="(product, index) in products"
                  :key="index"
                  class="result-card"
                  :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
                  :score-rating="productGetters.getAverageRating(product)"
                  :reviews-count="7"
                  :image="productGetters.getProductThumbnailImage(product)"
                  :alt="productGetters.getName(product)"
                  :title="productGetters.getName(product)"
                  :link="`/p/${productGetters.getProductSku(product)}${productGetters.getSlug(product, product.categories[0])}`"
                />
              </div>
            </SfScrollable>
            <div class="results--mobile smartphone-only">
              <SfProductCard
                v-for="(product, index) in products"
                :key="index"
                class="result-card"
                :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
                :score-rating="productGetters.getAverageRating(product)"
                :reviews-count="7"
                :image="productGetters.getProductThumbnailImage(product)"
                :alt="productGetters.getName(product)"
                :title="productGetters.getName(product)"
                :link="`/p/${productGetters.getProductSku(product)}${productGetters.getSlug(product, product.categories[0])}`"
              />
            </div>
          </SfMegaMenuColumn>
          <div class="action-buttons smartphone-only">
            <SfButton
              class="action-buttons__button color-light"
              @click="$emit('close')"
            >
              {{ $t('Cancel') }}
            </SfButton>
          </div>
        </div>
        <div
          v-else
          key="no-results"
          class="before-results"
        >
          <SfImage
            src="/error/error.svg"
            class="before-results__picture"
            alt="error"
            loading="lazy"
          />
          <p class="before-results__paragraph">
            {{ $t('You haven’t searched for items yet') }}
          </p>
          <p class="before-results__paragraph">
            {{ $t('Let’s start now – we’ll help you') }}
          </p>
          <SfButton
            class="before-results__button color-secondary smartphone-only"
            @click="$emit('close')"
          >
            {{ $t('Go back') }}
          </SfButton>
        </div>
      </transition>
    </SfMegaMenu>
  </div>
</template>
<script>
import {
  SfMegaMenu,
  SfList,
  SfBanner,
  SfProductCard,
  SfScrollable,
  SfMenuItem,
  SfButton,
  SfImage,
} from '@storefront-ui/vue';
import { ref, watch, computed } from '@vue/composition-api';
import { productGetters } from '@vue-storefront/magento';
import { useUiHelpers } from '~/composables';

export default {
  name: 'SearchResults',
  components: {
    SfMegaMenu,
    SfList,
    SfBanner,
    SfProductCard,
    SfScrollable,
    SfMenuItem,
    SfButton,
    SfImage,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    result: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const th = useUiHelpers();
    const isSearchOpen = ref(props.visible);
    const products = computed(() => props.result?.products);
    const categories = computed(() => props.result?.categories);

    watch(() => props.visible, (newVal) => {
      isSearchOpen.value = newVal;
      if (isSearchOpen.value) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
        emit('removeSearchResults');
      }
    });

    return {
      th,
      isSearchOpen,
      productGetters,
      products,
      categories,
    };
  },
};
</script>
<style lang="scss" scoped>
.search {
  position: absolute;
  right: 0;
  left: 0;
  z-index: 3;
  --mega-menu-column-header-margin: var(--spacer-sm) 0 var(--spacer-xl);
  --mega-menu-content-padding: 0;
  --mega-menu-height: auto;
  @include for-desktop {
    --mega-menu-content-padding: var(--spacer-xl) 0;
  }
  &__wrapper-results {
    display: flex;
    flex-direction: column;
    @include for-desktop {
      flex-direction: row;
      flex: 1;
    }
  }
  &__categories {
    flex: 0 0 220px;
  }
  &__results {
    flex: 1
  }
  &__header {
    margin-left: var(--spacer-sm);
  }
  ::v-deep .sf-bar {
    display: none;
  }
  ::v-deep .sf-mega-menu-column__header {
    display: none;
    @include for-desktop {
      display: flex;
    }
  }
}
.results {
  &--desktop {
    --scrollable-max-height: 35vh;
  }
  &--mobile {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: var(--c-white);
    padding: var(--spacer-base) var(--spacer-sm);
    --product-card-max-width: 9rem ;
  }
}
.see-all {
  padding: var(--spacer-xl) 0 0 var(--spacer-sm);
}
.action-buttons {
  padding: var(--spacer-xl) var(--spacer-sm) var(--spacer-3xl);
  background: var(--c-white);
  width: 100%;
  &__button {
    width: calc(100% - 32px);
  }
}
.results-listing {
  display: flex;
  flex-wrap: wrap;
  margin-left: var(--spacer-2xs);
}
.result-card {
  margin: var(--spacer-sm) 0;
  @include for-desktop {
    margin: var(--spacer-2xs) 0;
  }
}

.before-results {
  box-sizing: border-box;
  padding: var(--spacer-base) var(--spacer-sm) var(--spacer-2xl);
  width: 100%;
  text-align: center;
  @include for-desktop {
    padding: 0;
  }
  &__picture {
    --image-width: 230px;
    margin-top: var(--spacer-2xl);
    @include for-desktop {
      --image-width: 18.75rem;
      margin-top: var(--spacer-base);
    }
  }
  &__paragraph {
    font-family: var(--font-family--primary);
    font-weight: var(--font-weight--normal);
    font-size: var(--font-size--base);
    color: var(--c-text-muted);
    margin: 0;
    @include for-desktop {
      font-size: var(--font-size--lg);
    }
    &:first-of-type {
      margin: var(--spacer-xl) auto var(--spacer-xs);
    }
  }
  &__button {
    margin: var(--spacer-xl) auto;
    width: 100%;
  }
}
</style>
