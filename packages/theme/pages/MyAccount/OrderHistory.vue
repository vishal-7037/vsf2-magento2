<template>
  <SfTabs :open-tab="1">
    <SfTab
      data-cy="order-history-tab_my-orders"
      title="My orders"
    >
      <div v-if="currentOrder">
        <SfButton
          data-cy="order-history-btn_orders"
          class="sf-button--text all-orders"
          @click="currentOrder = null"
        >
          All Orders
        </SfButton>
        <div class="highlighted highlighted--total">
          <SfProperty
            name="Order ID"
            :value="orderGetters.getId(currentOrder)"
            class="sf-property--full-width property"
          />
          <SfProperty
            name="Date"
            :value="orderGetters.getDate(currentOrder)"
            class="sf-property--full-width property"
          />
          <SfProperty
            name="Status"
            :value="orderGetters.getStatus(currentOrder)"
            class="sf-property--full-width property"
          />
          <SfProperty
            name="Total"
            :value="$n(orderGetters.getPrice(currentOrder), 'currency')"
            class="sf-property--full-width property"
          />
        </div>
        <SfTable class="products">
          <SfTableHeading>
            <SfTableHeader class="products__name">
              {{ $t('Product') }}
            </SfTableHeader>
            <SfTableHeader>{{ $t('Quantity') }}</SfTableHeader>
            <SfTableHeader>{{ $t('Price') }}</SfTableHeader>
          </SfTableHeading>
          <SfTableRow
            v-for="(item, i) in orderGetters.getItems(currentOrder)"
            :key="i"
          >
            <SfTableData class="products__name">
              <nuxt-link :to="'/p/'+orderGetters.getItemSku(item)+'/'+orderGetters.getItemSku(item)">
                {{ orderGetters.getItemName(item) }}
              </nuxt-link>
            </SfTableData>
            <SfTableData>{{ orderGetters.getItemQty(item) }}</SfTableData>
            <SfTableData>{{ $n(orderGetters.getItemPrice(item), 'currency') }}</SfTableData>
          </SfTableRow>
        </SfTable>
      </div>
      <div v-else>
        <p class="message">
          {{ $t('Details and status orders') }}
        </p>
        <div
          v-if="orders.length === 0"
          class="no-orders"
        >
          <p class="no-orders__title">
            {{ $t('You currently have no orders') }}
          </p>
          <SfButton
            data-cy="order-history-btn_start"
            class="no-orders__button"
          >
            {{ $t('Start shopping') }}
          </SfButton>
        </div>
        <SfTable
          v-else
          class="orders"
        >
          <SfTableHeading>
            <SfTableHeader
              v-for="tableHeader in tableHeaders"
              :key="tableHeader"
            >
              {{ tableHeader }}
            </SfTableHeader>
            <SfTableHeader class="orders__element--right">
              <span class="smartphone-only">{{ $t('Download') }}</span>
              <SfButton
                data-cy="order-history-btn_download-all"
                class="desktop-only sf-button--text orders__download-all"
                @click="downloadOrders()"
              >
                {{ $t('Download all') }}
              </SfButton>
            </SfTableHeader>
          </SfTableHeading>
          <SfTableRow
            v-for="order in orders"
            :key="orderGetters.getId(order)"
          >
            <SfTableData>{{ orderGetters.getId(order) }}</SfTableData>
            <SfTableData>{{ orderGetters.getDate(order) }}</SfTableData>
            <SfTableData>{{ $n(orderGetters.getPrice(order), 'currency') }}</SfTableData>
            <SfTableData>
              <span :class="getStatusTextClass(order)">{{ orderGetters.getStatus(order) }}</span>
            </SfTableData>
            <SfTableData class="orders__view orders__element--right">
              <SfButton
                data-cy="order-history-btn_download"
                class="sf-button--text smartphone-only"
                @click="downloadOrder(order)"
              >
                {{ $t('Download') }}
              </SfButton>
              <SfButton
                data-cy="order-history-btn_view"
                class="sf-button--text desktop-only"
                @click="currentOrder = order"
              >
                {{ $t('View details') }}
              </SfButton>
            </SfTableData>
          </SfTableRow>
        </SfTable>
      </div>
    </SfTab>
    <SfTab
      data-cy="order-history-tab_returns"
      title="Returns"
    >
      <p class="message">
        This feature is not implemented yet! Please take a look at
        <br>
        <SfLink
          class="message__link"
          href="#"
        >
          https://github.com/DivanteLtd/vue-storefront/issues
        </SfLink>
        for our Roadmap!
      </p>
    </SfTab>
  </SfTabs>
</template>

<script>
import {
  SfTabs,
  SfTable,
  SfButton,
  SfProperty,
} from '@storefront-ui/vue';
import { computed, ref } from '@vue/composition-api';
import { useUserOrder, orderGetters } from '@vue-storefront/magento';
import { AgnosticOrderStatus, onSSR } from '@vue-storefront/core';

export default {
  name: 'PersonalDetails',
  components: {
    SfTabs,
    SfTable,
    SfButton,
    SfProperty,
  },
  setup() {
    const { orders, search } = useUserOrder();
    const currentOrder = ref(null);

    onSSR(async () => {
      await search();
    });

    const tableHeaders = [
      'Order ID',
      'Payment date',
      'Amount',
      'Status',
    ];

    const getStatusTextClass = (order) => {
      const status = orderGetters.getStatus(order);
      switch (status) {
        case AgnosticOrderStatus.Open:
          return 'text-warning';
        case AgnosticOrderStatus.Complete:
          return 'text-success';
        default:
          return '';
      }
    };

    const downloadFile = (file, name) => {
      const a = document.createElement('a');
      document.body.append(a);
      a.style = 'display: none';

      const url = window.URL.createObjectURL(file);
      a.href = url;
      a.download = name;
      a.click();
      window.URL.revokeObjectURL(url);
    };

    const downloadOrders = async () => {
      downloadFile(new Blob([JSON.stringify(orders.value)], { type: 'application/json' }), 'orders.json');
    };

    const downloadOrder = async (order) => {
      downloadFile(new Blob([JSON.stringify(order)], { type: 'application/json' }), `order ${orderGetters.getId(order)}.json`);
    };

    return {
      tableHeaders,
      orders: computed(() => (orders ? orders.value : [])),
      getStatusTextClass,
      orderGetters,
      downloadOrder,
      downloadOrders,
      currentOrder,
    };
  },
};
</script>

<style lang='scss' scoped>
.no-orders {
  &__title {
    margin: 0 0 var(--spacer-lg) 0;
    font: var(--font-weight--normal) var(--font-size--base) / 1.6 var(--font-family--primary);
  }
  &__button {
    --button-width: 100%;
    @include for-desktop {
      --button-width: 17,5rem;
    }
  }
}
.orders {
  @include for-desktop {
    &__element {
      &--right {
        --table-column-flex: 0;
        text-align: right;
      }
    }
  }
}
.all-orders {
  --button-padding: var(--spacer-base) 0;
}
.message {
  margin: 0 0 var(--spacer-xl) 0;
  font: var(--font-weight--light) var(--font-size--base) / 1.6 var(--font-family--primary);
  &__link {
    color: var(--c-primary);
    font-weight: var(--font-weight--medium);
    font-family: var(--font-family--primary);
    font-size: var(--font-size--base);
    text-decoration: none;
    &:hover {
      color: var(--c-text);
    }
  }
}
.product {
  &__properties {
    margin: var(--spacer-xl) 0 0 0;
  }
  &__property,
  &__action {
    font-size: var(--font-size--sm);
  }
  &__action {
    color: var(--c-gray-variant);
    font-size: var(--font-size--sm);
    margin: 0 0 var(--spacer-sm) 0;
    &:last-child {
      margin: 0;
    }
  }
  &__qty {
    color: var(--c-text);
  }
}
.products {
  --table-column-flex: 1;
  &__name {
    margin-right: var(--spacer-sm);
    @include for-desktop {
      --table-column-flex: 2;
    }
  }
}
.highlighted {
  box-sizing: border-box;
  width: 100%;
  background-color: var(--c-light);
  padding: var(--spacer-sm);
  --property-value-font-size: var(--font-size--base);
  --property-name-font-size: var(--font-size--base);
  &:last-child {
    margin-bottom: 0;
  }
  ::v-deep .sf-property__name {
    white-space: nowrap;
  }
  ::v-deep .sf-property__value {
    text-align: right;
  }
  &--total {
    margin-bottom: var(--spacer-sm);
  }
  @include for-desktop {
    padding: var(--spacer-xl);
    --property-name-font-size: var(--font-size--lg);
    --property-name-font-weight: var(--font-weight--medium);
    --property-value-font-size: var(--font-size--lg);
    --property-value-font-weight: var(--font-weight--semibold);
  }
}

</style>
