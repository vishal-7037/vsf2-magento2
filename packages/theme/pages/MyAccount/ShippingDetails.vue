<template>
  <transition name="fade">
    <SfTabs
      v-if="editingAddress"
      key="edit-address"
      :open-tab="1"
      class="tab-orphan"
    >
      <SfTab
        :title="isNewAddress ? 'Add the address' : 'Update the address'"
      >
        <p class="message">
          {{ $t('Contact details updated') }}
        </p>

        <ShippingAddressForm
          :address="activeAddress"
          :is-new="isNewAddress"
          @submit="saveAddress"
        />
      </SfTab>
    </SfTabs>

    <SfTabs
      v-else
      key="address-list"
      :open-tab="1"
      class="tab-orphan"
    >
      <SfTab title="Shipping details">
        <p class="message">
          {{ $t('Manage shipping addresses') }}
        </p>
        <transition-group
          tag="div"
          name="fade"
          class="shipping-list"
        >
          <div
            v-for="address in addresses"
            :key="userShippingGetters.getId(address)"
            class="shipping"
          >
            <div class="shipping__content">
              <div class="shipping__address">
                <UserShippingAddress :address="address" />
              </div>
            </div>
            <div class="shipping__actions">
              <SfIcon
                icon="cross"
                color="gray"
                size="14px"
                role="button"
                class="smartphone-only"
                @click="removeAddress(address)"
              />
              <SfButton
                @click="changeAddress(address)"
              >
                {{ $t('Change') }}
              </SfButton>

              <SfButton
                v-if="!userShippingGetters.isDefault(address)"
                class="color-light shipping__button-delete desktop-only"
                @click="removeAddress(address)"
              >
                {{ $t('Delete') }}
              </SfButton>
            </div>
          </div>
        </transition-group>
        <SfButton
          class="action-button"
          @click="changeAddress()"
        >
          {{ $t('Add new address') }}
        </SfButton>
      </SfTab>
    </SfTabs>
  </transition>
</template>
<script>
import {
  SfTabs,
  SfButton,
  SfIcon,
} from '@storefront-ui/vue';
import { useUserShipping, userShippingGetters } from '@vue-storefront/magento';
import { ref, computed } from '@vue/composition-api';
import { onSSR } from '@vue-storefront/core';
import ShippingAddressForm from '~/components/MyAccount/ShippingAddressForm';
import UserShippingAddress from '~/components/UserShippingAddress';

export default {
  name: 'ShippingDetails',
  components: {
    SfTabs,
    SfButton,
    SfIcon,
    UserShippingAddress,
    ShippingAddressForm,
  },
  setup() {
    const {
      shipping,
      load: loadUserShipping,
      addAddress,
      deleteAddress,
      updateAddress,
    } = useUserShipping();
    const addresses = computed(() => userShippingGetters.getAddresses(shipping.value));
    const editingAddress = ref(false);
    const activeAddress = ref();
    const isNewAddress = computed(() => !activeAddress.value);

    const changeAddress = (address) => {
      activeAddress.value = address;
      editingAddress.value = true;
    };

    const removeAddress = async (address) => {
      const isDefault = userShippingGetters.isDefault(address);
      if (!isDefault) {
        await deleteAddress({ address });
      }
    };

    const saveAddress = async ({ form, onComplete, onError }) => {
      try {
        const actionMethod = isNewAddress.value ? addAddress : updateAddress;
        const data = await actionMethod({ address: form });
        editingAddress.value = false;
        activeAddress.value = undefined;
        await onComplete(data);
      } catch (error) {
        onError(error);
      }
    };

    onSSR(async () => {
      await loadUserShipping();
    });

    return {
      changeAddress,
      updateAddress,
      removeAddress,
      saveAddress,
      userShippingGetters,
      addresses,
      editingAddress,
      activeAddress,
      isNewAddress,
    };
  },
};
</script>

<style lang='scss' scoped>

.message {
  font-family: var(--font-family--primary);
  line-height: 1.6;
  font-size: var(--font-size--base);
  margin: 0 0 var(--spacer-base);
}

.shipping-list {
  margin-bottom: var(--spacer-base);
}

.shipping {
  display: flex;
  padding: var(--spacer-xl) 0;
  border-top: 1px solid var(--c-light);

  &:last-child {
    border-bottom: 1px solid var(--c-light);
  }

  &__content {
    flex: 1;
    color: var(--c-text);
    font-size: var(--font-size--base);
    font-weight: 300;
    line-height: 1.6;
  }

  &__actions {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    @include for-desktop {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }
  }

  &__button-delete {
    color: var(--c-link);
    @include for-desktop {
      margin-left: var(--spacer-base);
    }
  }

  &__address {
    margin: 0;

    p {
      margin: 0;
    }
  }

  &__client-name {
    font-size: var(--font-size--base);
    font-weight: 500;
  }
}

.action-button {
  width: 100%;
  @include for-desktop {
    width: auto;
  }
}

.tab-orphan {
  @include for-mobile {
    ::v-deep .sf-tabs {
      &__title {
        display: none;
      }

      &__content {
        border: 0;
        padding: 0;
      }
    }
  }
}
</style>
