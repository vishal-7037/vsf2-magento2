<template>
  <SfSection
    :title-heading="title"
    class="section"
  >
    <SfLoader
      :class="{ loading }"
      :loading="loading"
    >
      <SfCarousel
        data-cy="related-products-carousel"
        :settings="{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }"
        class="carousel"
      >
        <SfCarouselItem
          v-for="(product, i) in products"
          :key="i"
          class="carousel__item"
        >
          <SfProductCard
            :title="productGetters.getName(product)"
            :image="productGetters.getProductThumbnailImage(product)"
            :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
            :special-price="productGetters.getPrice(product).special && $n(productGetters.getPrice(product).special, 'currency')"
            :link="localePath(`/p/${productGetters.getProductSku(product)}${productGetters.getSlug(product, product.categories[0])}`)"
          />
        </SfCarouselItem>
      </SfCarousel>
    </SfLoader>
  </SfSection>
</template>

<script lang="ts">
import {
  SfCarousel,
  SfProductCard,
  SfSection,
  SfLoader,
} from '@storefront-ui/vue';

import { productGetters } from '@vue-storefront/magento';

export default {
  name: 'ProductsCarousel',
  components: {
    SfCarousel,
    SfProductCard,
    SfSection,
    SfLoader,
  },
  props: {
    title: String,
    products: Array,
    loading: Boolean,
  },
  setup() {
    return { productGetters };
  },
};
</script>

<style lang="scss" scoped>
.section {
  margin-top: var(--spacer-base);
}

.carousel {
    margin: 0 calc(var(--spacer-sm) * -1) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.9375rem 0 2.4375rem 0;
  }
}

</style>
