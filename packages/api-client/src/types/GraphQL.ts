export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface AddBundleProductsToCartInput {
  cart_id: Scalars['String'];
  cart_items: Array<Maybe<BundleProductCartItemInput>>;
}

export interface AddBundleProductsToCartOutput {
  cart: Cart;
}

export interface AddConfigurableProductsToCartInput {
  cart_id: Scalars['String'];
  cart_items: Array<Maybe<ConfigurableProductCartItemInput>>;
}

export interface AddConfigurableProductsToCartOutput {
  cart: Cart;
}

export interface AddDownloadableProductsToCartInput {
  cart_id: Scalars['String'];
  cart_items: Array<Maybe<DownloadableProductCartItemInput>>;
}

export interface AddDownloadableProductsToCartOutput {
  cart: Cart;
}

export interface AddProductsToCartOutput {
  /** The cart after products have been added */
  cart: Cart;
  /** An error encountered while adding an item to the cart. */
  user_errors: Array<Maybe<CartUserInputError>>;
}

export interface AddProductsToCompareListInput {
  /** An array of product IDs to add to the compare list */
  products: Array<Maybe<Scalars['ID']>>;
  /** The unique identifier of the compare list to modify */
  uid: Scalars['ID'];
}

/** Contains the customer's wish list and any errors encountered */
export interface AddProductsToWishlistOutput {
  /** An array of errors encountered while adding products to a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully added */
  wishlist: Wishlist;
}

export interface AddSimpleProductsToCartInput {
  cart_id: Scalars['String'];
  cart_items: Array<Maybe<SimpleProductCartItemInput>>;
}

export interface AddSimpleProductsToCartOutput {
  cart: Cart;
}

export interface AddVirtualProductsToCartInput {
  cart_id: Scalars['String'];
  cart_items: Array<Maybe<VirtualProductCartItemInput>>;
}

export interface AddVirtualProductsToCartOutput {
  cart: Cart;
}

/** A bucket that contains information for each filterable option (such as price, category `UID`, and custom attributes). */
export interface Aggregation {
  /** Attribute code of the aggregation group. */
  attribute_code: Scalars['String'];
  /** The number of options in the aggregation group. */
  count?: Maybe<Scalars['Int']>;
  /** The aggregation display name. */
  label?: Maybe<Scalars['String']>;
  /** Array of options for the aggregation. */
  options?: Maybe<Array<Maybe<AggregationOption>>>;
}

export interface AggregationOption extends AggregationOptionInterface {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>;
  /** Aggregation option display label. */
  label?: Maybe<Scalars['String']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String'];
}

export interface AggregationOptionInterface {
  /** The number of items that match the aggregation option. */
  count?: Maybe<Scalars['Int']>;
  /** Aggregation option display label. */
  label?: Maybe<Scalars['String']>;
  /** The internal ID that represents the value of the option. */
  value: Scalars['String'];
}

export interface AppliedCoupon {
  code: Scalars['String'];
}

export interface ApplyCouponToCartInput {
  cart_id: Scalars['String'];
  coupon_code: Scalars['String'];
}

export interface ApplyCouponToCartOutput {
  cart: Cart;
}

/** AreaInput defines the parameters which will be used for filter by specified location. */
export interface AreaInput {
  /** The radius for the search in KM. */
  radius: Scalars['Int'];
  /** The country code where search must be performed. Required parameter together with region, city or postcode. */
  search_term: Scalars['String'];
}

export interface Assets {
  /** The payment method logo url (descriptive) */
  descriptive?: Maybe<Scalars['String']>;
  /** The payment method logo url (standard) */
  standard?: Maybe<Scalars['String']>;
}

export interface AssignCompareListToCustomerOutput {
  /** The contents of the customer's compare list */
  compare_list?: Maybe<CompareList>;
  result: Scalars['Boolean'];
}

/** Attribute contains the attribute_type of the specified attribute_code and entity_type */
export interface Attribute {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: Maybe<Scalars['String']>;
  /** Attribute options list. */
  attribute_options?: Maybe<Array<Maybe<AttributeOption>>>;
  /** The data type of the attribute */
  attribute_type?: Maybe<Scalars['String']>;
  /** The type of entity that defines the attribute */
  entity_type?: Maybe<Scalars['String']>;
  /** The frontend input type of the attribute */
  input_type?: Maybe<Scalars['String']>;
}

/** AttributeInput specifies the attribute_code and entity_type to search */
export interface AttributeInput {
  /** The unique identifier for an attribute code. This value should be in lowercase letters without spaces. */
  attribute_code?: Maybe<Scalars['String']>;
  /** The type of entity that defines the attribute */
  entity_type?: Maybe<Scalars['String']>;
}

/** Attribute option. */
export interface AttributeOption {
  /** Attribute option label. */
  label?: Maybe<Scalars['String']>;
  /** Attribute option value. */
  value?: Maybe<Scalars['String']>;
}

export interface AvailablePaymentMethod {
  /** The payment method code */
  code: Scalars['String'];
  /** The payment method title. */
  title: Scalars['String'];
}

export interface AvailableShippingMethod {
  amount: Money;
  available: Scalars['Boolean'];
  /** @deprecated The field should not be used on the storefront */
  base_amount?: Maybe<Money>;
  carrier_code: Scalars['String'];
  carrier_title: Scalars['String'];
  error_message?: Maybe<Scalars['String']>;
  /** Could be null if method is not available */
  method_code?: Maybe<Scalars['String']>;
  /** Could be null if method is not available */
  method_title?: Maybe<Scalars['String']>;
  price_excl_tax: Money;
  price_incl_tax: Money;
}

export interface BillingAddressInput {
  address?: Maybe<CartAddressInput>;
  customer_address_id?: Maybe<Scalars['Int']>;
  /** Set billing address same as shipping */
  same_as_shipping?: Maybe<Scalars['Boolean']>;
  /** Deprecated: use `same_as_shipping` field instead */
  use_for_shipping?: Maybe<Scalars['Boolean']>;
}

export interface BillingCartAddress extends CartAddressInterface {
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  /** @deprecated The field is used only in shipping address */
  customer_notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
}

export interface BraintreeCcVaultInput {
  device_data?: Maybe<Scalars['String']>;
  public_hash: Scalars['String'];
}

export interface BraintreeInput {
  /** Contains a fingerprint provided by Braintree JS SDK and should be sent with sale transaction details to the Braintree payment gateway. Should be specified only in a case if Kount (advanced fraud protection) is enabled for Braintree payment integration. */
  device_data?: Maybe<Scalars['String']>;
  /** States whether an entered by a customer credit/debit card should be tokenized for later usage. Required only if Vault is enabled for Braintree payment integration. */
  is_active_payment_token_enabler: Scalars['Boolean'];
  /** The one-time payment token generated by Braintree payment gateway based on card details. Required field to make sale transaction. */
  payment_method_nonce: Scalars['String'];
}

/** Breadcrumb item. */
export interface Breadcrumb {
  /**
   * Category ID.
   * @deprecated Use the `category_uid` argument instead.
   */
  category_id?: Maybe<Scalars['Int']>;
  /** Category level. */
  category_level?: Maybe<Scalars['Int']>;
  /** Category name. */
  category_name?: Maybe<Scalars['String']>;
  /** The unique ID for a `Breadcrumb` object. */
  category_uid: Scalars['ID'];
  /** Category URL key. */
  category_url_key?: Maybe<Scalars['String']>;
  /** Category URL path. */
  category_url_path?: Maybe<Scalars['String']>;
}

export interface BundleCartItem extends CartItemInterface {
  bundle_options: Array<Maybe<SelectedBundleOption>>;
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
}

export interface BundleCreditMemoItem extends CreditMemoItemInterface {
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
}

export interface BundleInvoiceItem extends InvoiceItemInterface {
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
}

/** BundleItem defines an individual item in a bundle product. */
export interface BundleItem {
  /**
   * An ID assigned to each type of item in a bundle product.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** An array of additional options for this bundle item. */
  options?: Maybe<Array<Maybe<BundleItemOption>>>;
  /** he relative position of this item compared to the other bundle items. */
  position?: Maybe<Scalars['Int']>;
  /** Indicates whether the item must be included in the bundle. */
  required?: Maybe<Scalars['Boolean']>;
  /** The SKU of the bundle product. */
  sku?: Maybe<Scalars['String']>;
  /** The display name of the item. */
  title?: Maybe<Scalars['String']>;
  /** The input type that the customer uses to select the item. Examples include radio button and checkbox. */
  type?: Maybe<Scalars['String']>;
  /** The unique ID for a `BundleItem` object. */
  uid?: Maybe<Scalars['ID']>;
}

/** BundleItemOption defines characteristics and options for a specific bundle item. */
export interface BundleItemOption {
  /** Indicates whether the customer can change the number of items for this option. */
  can_change_quantity?: Maybe<Scalars['Boolean']>;
  /**
   * The ID assigned to the bundled item option.
   * @deprecated Use `uid` instead
   */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether this option is the default option. */
  is_default?: Maybe<Scalars['Boolean']>;
  /** The text that identifies the bundled item option. */
  label?: Maybe<Scalars['String']>;
  /** When a bundle item contains multiple options, the relative position of this option compared to the other options. */
  position?: Maybe<Scalars['Int']>;
  /** The price of the selected option. */
  price?: Maybe<Scalars['Float']>;
  /** One of FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** Contains details about this product option. */
  product?: Maybe<ProductInterface>;
  /**
   * Indicates the quantity of this specific bundle item.
   * @deprecated The `qty` is deprecated. Use `quantity` instead.
   */
  qty?: Maybe<Scalars['Float']>;
  /** Indicates the quantity of this specific bundle item. */
  quantity?: Maybe<Scalars['Float']>;
  /** The unique ID for a `BundleItemOption` object. */
  uid: Scalars['ID'];
}

export interface BundleOptionInput {
  id: Scalars['Int'];
  quantity: Scalars['Float'];
  value: Array<Maybe<Scalars['String']>>;
}

export interface BundleOrderItem extends OrderItemInterface {
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
}

/** BundleProduct defines basic features of a bundle product and contains multiple BundleItems. */
export interface BundleProduct extends CustomizableProductInterface, PhysicalProductInterface, ProductInterface {
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** Indicates whether the bundle product has a dynamic price. */
  dynamic_price?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the bundle product has a dynamic SK. */
  dynamic_sku?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the bundle product has a dynamically calculated weight. */
  dynamic_weight?: Maybe<Scalars['Boolean']>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** An array containing information about individual bundle items. */
  items?: Maybe<Array<Maybe<BundleItem>>>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** One of PRICE_RANGE or AS_LOW_AS. */
  price_view?: Maybe<PriceViewEnum>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** Indicates whether to ship bundle items together or individually. */
  ship_bundle_items?: Maybe<ShipBundleItemsEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
}


/** BundleProduct defines basic features of a bundle product and contains multiple BundleItems. */
export interface BundleProductReviewsArgs {
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}

export interface BundleProductCartItemInput {
  bundle_options: Array<Maybe<BundleOptionInput>>;
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
  data: CartItemInput;
}

export interface BundleShipmentItem extends ShipmentItemInterface {
  /** A list of bundle options that are assigned to the bundle product */
  bundle_options?: Maybe<Array<Maybe<ItemSelectedBundleOption>>>;
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
}

export interface BundleWishlistItem extends WishlistItemInterface {
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** An array containing information about the selected bundle items */
  bundle_options?: Maybe<Array<Maybe<SelectedBundleOption>>>;
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
}

export interface Cart {
  /**
   * An array of coupons that have been applied to the cart
   * @deprecated Use applied_coupons instead
   */
  applied_coupon?: Maybe<AppliedCoupon>;
  /** An array of `AppliedCoupon` objects. Each object contains the `code` text attribute, which specifies the coupon code */
  applied_coupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
  /** Available payment methods */
  available_payment_methods?: Maybe<Array<Maybe<AvailablePaymentMethod>>>;
  billing_address?: Maybe<BillingCartAddress>;
  email?: Maybe<Scalars['String']>;
  /** The entered gift message for the cart */
  gift_message?: Maybe<GiftMessage>;
  /** The unique ID for a `Cart` object */
  id: Scalars['ID'];
  is_virtual: Scalars['Boolean'];
  items?: Maybe<Array<Maybe<CartItemInterface>>>;
  prices?: Maybe<CartPrices>;
  selected_payment_method?: Maybe<SelectedPaymentMethod>;
  shipping_addresses: Array<Maybe<ShippingCartAddress>>;
  total_quantity: Scalars['Float'];
}

export interface CartAddressCountry {
  code: Scalars['String'];
  label: Scalars['String'];
}

export interface CartAddressInput {
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country_code: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
  /** Determines whether to save the address in the customer's address book. The default value is true */
  save_in_address_book?: Maybe<Scalars['Boolean']>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
}

export interface CartAddressInterface {
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
}

export interface CartAddressRegion {
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
}

export interface CartDiscount {
  amount: Money;
  label: Array<Maybe<Scalars['String']>>;
}

export interface CartItemInput {
  /** An array of entered options for the base product, such as personalization text */
  entered_options?: Maybe<Array<Maybe<EnteredOptionInput>>>;
  /** For child products, the SKU of its parent product */
  parent_sku?: Maybe<Scalars['String']>;
  quantity: Scalars['Float'];
  /** The selected options for the base product, such as color or size with  unique ID for a `CustomizableRadioOption`, `CustomizableDropDownOption`, `ConfigurableProductOptionsValues`, etc. objects */
  selected_options?: Maybe<Array<Maybe<Scalars['ID']>>>;
  sku: Scalars['String'];
}

export interface CartItemInterface {
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
}

export interface CartItemPrices {
  /** An array of discounts to be applied to the cart item */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  price: Money;
  row_total: Money;
  row_total_including_tax: Money;
  /** The total of all discounts applied to the item */
  total_item_discount?: Maybe<Money>;
}

/** Deprecated: `cart_items` field of `ShippingCartAddress` returns now  `CartItemInterface` instead of `CartItemQuantity` */
export interface CartItemQuantity {
  /** @deprecated `cart_items` field of `ShippingCartAddress` returns now `CartItemInterface` instead of `CartItemQuantity` */
  cart_item_id: Scalars['Int'];
  /** @deprecated `cart_items` field of `ShippingCartAddress` returns now `CartItemInterface` instead of `CartItemQuantity` */
  quantity: Scalars['Float'];
}

export interface CartItemSelectedOptionValuePrice {
  type: PriceTypeEnum;
  units: Scalars['String'];
  value: Scalars['Float'];
}

export interface CartItemUpdateInput {
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: Maybe<Scalars['Int']>;
  /** The unique ID for a `CartItemInterface` object */
  cart_item_uid?: Maybe<Scalars['ID']>;
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
  /** Gift message details for the cart item */
  gift_message?: Maybe<GiftMessageInput>;
  quantity?: Maybe<Scalars['Float']>;
}

export interface CartPrices {
  applied_taxes?: Maybe<Array<Maybe<CartTaxItem>>>;
  /** @deprecated Use discounts instead  */
  discount?: Maybe<CartDiscount>;
  /** An array of applied discounts */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  grand_total?: Maybe<Money>;
  subtotal_excluding_tax?: Maybe<Money>;
  subtotal_including_tax?: Maybe<Money>;
  subtotal_with_discount_excluding_tax?: Maybe<Money>;
}

export interface CartTaxItem {
  amount: Money;
  label: Scalars['String'];
}

/** An error encountered while adding an item to the the cart. */
export interface CartUserInputError {
  /** Cart-specific error code */
  code: CartUserInputErrorType;
  /** A localized error message */
  message: Scalars['String'];
}

export enum CartUserInputErrorType {
  InsufficientStock = 'INSUFFICIENT_STOCK',
  NotSalable = 'NOT_SALABLE',
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  Undefined = 'UNDEFINED'
}

export interface Categories {
  /** The payment method assets */
  asset_urls?: Maybe<Array<Maybe<Assets>>>;
  /** The payment method identifier */
  identifier: Scalars['String'];
  /** The payment method name */
  name: Scalars['String'];
}

/** CategoryFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export interface CategoryFilterInput {
  /** Filter by the unique category ID for a `CategoryInterface` object. */
  category_uid?: Maybe<FilterEqualTypeInput>;
  /** Deprecated: use 'category_uid' to filter uniquely identifiers of categories. */
  ids?: Maybe<FilterEqualTypeInput>;
  /** Filter by the display name of the category. */
  name?: Maybe<FilterMatchTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_category_uid?: Maybe<FilterEqualTypeInput>;
  /** Filter by the unique parent category ID for a `CategoryInterface` object. */
  parent_id?: Maybe<FilterEqualTypeInput>;
  /** Filter by the part of the URL that identifies the category. */
  url_key?: Maybe<FilterEqualTypeInput>;
  /** Filter by the URL path for the category. */
  url_path?: Maybe<FilterEqualTypeInput>;
}

/** CategoryInterface contains the full set of attributes that can be returned in a category search. */
export interface CategoryInterface {
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Breadcrumbs, parent categories info. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  children_count?: Maybe<Scalars['String']>;
  /** Category CMS Block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * Timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  custom_layout_update_file?: Maybe<Scalars['String']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']>;
  display_mode?: Maybe<Scalars['String']>;
  filter_price_range?: Maybe<Scalars['Float']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use the `uid` argument instead.
   */
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  include_in_menu?: Maybe<Scalars['Int']>;
  is_anchor?: Maybe<Scalars['Int']>;
  landing_page?: Maybe<Scalars['Int']>;
  /** Indicates the depth of the category within the tree. */
  level?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']>;
  /** Category Path. */
  path?: Maybe<Scalars['String']>;
  /** Category path in store. */
  path_in_store?: Maybe<Scalars['String']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** The url key assigned to the category. */
  url_key?: Maybe<Scalars['String']>;
  /** The url path assigned to the category. */
  url_path?: Maybe<Scalars['String']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
}


/** CategoryInterface contains the full set of attributes that can be returned in a category search. */
export interface CategoryInterfaceProductsArgs {
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductAttributeSortInput>;
}

/** The category products object returned in the Category query. */
export interface CategoryProducts {
  /** An array of products that are assigned to the category. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']>;
}

/** A collection of CategoryTree objects and pagination information. */
export interface CategoryResult {
  /** A list of categories that match the filter criteria. */
  items?: Maybe<Array<Maybe<CategoryTree>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total number of categories that match the criteria. */
  total_count?: Maybe<Scalars['Int']>;
}

/** Category Tree implementation. */
export interface CategoryTree extends CategoryInterface {
  available_sort_by?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Breadcrumbs, parent categories info. */
  breadcrumbs?: Maybe<Array<Maybe<Breadcrumb>>>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Categories' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** Child categories tree. */
  children?: Maybe<Array<Maybe<CategoryTree>>>;
  children_count?: Maybe<Scalars['String']>;
  /** Category CMS Block. */
  cms_block?: Maybe<CmsBlock>;
  /**
   * Timestamp indicating when the category was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  custom_layout_update_file?: Maybe<Scalars['String']>;
  /** The attribute to use for sorting. */
  default_sort_by?: Maybe<Scalars['String']>;
  /** An optional description of the category. */
  description?: Maybe<Scalars['String']>;
  display_mode?: Maybe<Scalars['String']>;
  filter_price_range?: Maybe<Scalars['Float']>;
  /**
   * An ID that uniquely identifies the category.
   * @deprecated Use the `uid` argument instead.
   */
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  include_in_menu?: Maybe<Scalars['Int']>;
  is_anchor?: Maybe<Scalars['Int']>;
  landing_page?: Maybe<Scalars['Int']>;
  /** Indicates the depth of the category within the tree. */
  level?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  /** The display name of the category. */
  name?: Maybe<Scalars['String']>;
  /** Category Path. */
  path?: Maybe<Scalars['String']>;
  /** Category path in store. */
  path_in_store?: Maybe<Scalars['String']>;
  /** The position of the category relative to other categories at the same level in tree. */
  position?: Maybe<Scalars['Int']>;
  /** The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  product_count?: Maybe<Scalars['Int']>;
  /** The list of products assigned to the category. */
  products?: Maybe<CategoryProducts>;
  /** The unique ID for a `CategoryInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the category was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** The url key assigned to the category. */
  url_key?: Maybe<Scalars['String']>;
  /** The url path assigned to the category. */
  url_path?: Maybe<Scalars['String']>;
  /** The part of the category URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
}


/** Category Tree implementation. */
export interface CategoryTreeProductsArgs {
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductAttributeSortInput>;
}

/** Defines all Checkout Agreement information */
export interface CheckoutAgreement {
  /** Checkout Agreement identifier */
  agreement_id: Scalars['Int'];
  /** Checkout Agreement checkbox text */
  checkbox_text: Scalars['String'];
  /** Checkout Agreement content */
  content: Scalars['String'];
  /** Checkout Agreement content height */
  content_height?: Maybe<Scalars['String']>;
  /** Is Checkout Agreement content in HTML format */
  is_html: Scalars['Boolean'];
  mode: CheckoutAgreementMode;
  /** Checkout Agreement name */
  name: Scalars['String'];
}

export enum CheckoutAgreementMode {
  Auto = 'AUTO',
  Manual = 'MANUAL'
}

/** An error encountered while adding an item the the cart. */
export interface CheckoutUserInputError {
  /** Checkout-specific error code */
  code: CheckoutUserInputErrorCodes;
  /** Localized error message */
  message: Scalars['String'];
  /** Path to the input field that caused an error. See the GraphQL specification about path errors for details: http://spec.graphql.org/draft/#sec-Errors */
  path: Array<Maybe<Scalars['String']>>;
}

export enum CheckoutUserInputErrorCodes {
  InsufficientStock = 'INSUFFICIENT_STOCK',
  NotSalable = 'NOT_SALABLE',
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  ReorderNotAvailable = 'REORDER_NOT_AVAILABLE',
  Undefined = 'UNDEFINED'
}

/** CMS block defines all CMS block information */
export interface CmsBlock {
  /** CMS block content */
  content?: Maybe<Scalars['String']>;
  /** CMS block identifier */
  identifier?: Maybe<Scalars['String']>;
  /** CMS block title */
  title?: Maybe<Scalars['String']>;
}

/** CMS blocks information */
export interface CmsBlocks {
  /** An array of CMS blocks */
  items?: Maybe<Array<Maybe<CmsBlock>>>;
}

/** CMS page defines all CMS page information */
export interface CmsPage {
  /** CMS page content */
  content?: Maybe<Scalars['String']>;
  /** CMS page content heading */
  content_heading?: Maybe<Scalars['String']>;
  /** Identifier of the CMS page */
  identifier?: Maybe<Scalars['String']>;
  /** CMS page meta description */
  meta_description?: Maybe<Scalars['String']>;
  /** CMS page meta keywords */
  meta_keywords?: Maybe<Scalars['String']>;
  /** CMS page meta title */
  meta_title?: Maybe<Scalars['String']>;
  /** CMS page content heading */
  page_layout?: Maybe<Scalars['String']>;
  /** CMS page title */
  title?: Maybe<Scalars['String']>;
  /** URL key of CMS page */
  url_key?: Maybe<Scalars['String']>;
}

export interface ColorSwatchData extends SwatchDataInterface {
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
}

export interface ComparableAttribute {
  /** An attribute code that is enabled for product comparisons */
  code: Scalars['String'];
  /** The label of the attribute code */
  label: Scalars['String'];
}

export interface ComparableItem {
  /** An array of product attributes that can be used to compare products */
  attributes: Array<Maybe<ProductAttribute>>;
  /** Contains details about a product in a compare list */
  product: ProductInterface;
  /** The unique ID of an item in a compare list */
  uid: Scalars['ID'];
}

export interface CompareList {
  /** An array of attributes that can be used for comparing products */
  attributes?: Maybe<Array<Maybe<ComparableAttribute>>>;
  /** The number of items in the compare list */
  item_count: Scalars['Int'];
  /** An array of products to compare */
  items?: Maybe<Array<Maybe<ComparableItem>>>;
  /** The unique ID assigned to the compare list */
  uid: Scalars['ID'];
}

export interface ComplexTextValue {
  /** HTML format */
  html: Scalars['String'];
}

/** ConfigurableAttributeOption contains the value_index (and other related information) assigned to a configurable product option */
export interface ConfigurableAttributeOption {
  /** The ID assigned to the attribute */
  code?: Maybe<Scalars['String']>;
  /** A string that describes the configurable attribute option */
  label?: Maybe<Scalars['String']>;
  /** The unique ID for a `ConfigurableAttributeOption` object */
  uid: Scalars['ID'];
  /** A unique index number assigned to the configurable product option */
  value_index?: Maybe<Scalars['Int']>;
}

export interface ConfigurableCartItem extends CartItemInterface {
  configurable_options: Array<Maybe<SelectedConfigurableOption>>;
  customizable_options?: Maybe<Array<Maybe<SelectedCustomizableOption>>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
}

/** Configurable option available for further selection based on current selection. */
export interface ConfigurableOptionAvailableForSelection {
  /** Attribute code that uniquely identifies configurable option. */
  attribute_code: Scalars['String'];
  /** Configurable option values available for further selection. */
  option_value_uids: Array<Maybe<Scalars['ID']>>;
}

/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export interface ConfigurableProduct extends CustomizableProductInterface, PhysicalProductInterface, ProductInterface {
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  /** An array of linked simple product items */
  configurable_options?: Maybe<Array<Maybe<ConfigurableProductOptions>>>;
  /** Metadata for the specified configurable options selection */
  configurable_product_options_selection?: Maybe<ConfigurableProductOptionsSelection>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /** An array of variants of products */
  variants?: Maybe<Array<Maybe<ConfigurableVariant>>>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
}


/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export interface ConfigurableProductConfigurable_Product_Options_SelectionArgs {
  configurableOptionValueUids?: Maybe<Array<Scalars['ID']>>;
}


/** ConfigurableProduct defines basic features of a configurable product and its simple product variants */
export interface ConfigurableProductReviewsArgs {
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}

export interface ConfigurableProductCartItemInput {
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
  data: CartItemInput;
  /** Configurable product SKU. */
  parent_sku?: Maybe<Scalars['String']>;
  /** Deprecated. Use CartItemInput.sku instead. */
  variant_sku?: Maybe<Scalars['String']>;
}

/** ConfigurableProductOptions defines configurable attributes for the specified product */
export interface ConfigurableProductOptions {
  /** A string that identifies the attribute */
  attribute_code?: Maybe<Scalars['String']>;
  /**
   * The ID assigned to the attribute
   * @deprecated Use attribute_uid instead
   */
  attribute_id?: Maybe<Scalars['String']>;
  /**
   * The ID assigned to the attribute
   * @deprecated Use attribute_uid instead
   */
  attribute_id_v2?: Maybe<Scalars['Int']>;
  /** The unique ID for a `Attribute` object */
  attribute_uid: Scalars['ID'];
  /**
   * The configurable option ID number assigned by the system
   * @deprecated Use uid instead
   */
  id?: Maybe<Scalars['Int']>;
  /** A string that describes the configurable product option, which is displayed on the UI */
  label?: Maybe<Scalars['String']>;
  /** A number that indicates the order in which the attribute is displayed */
  position?: Maybe<Scalars['Int']>;
  /**
   * This is the same as a product's id field
   * @deprecated `product_id` is not needed and can be obtained from it's parent
   */
  product_id?: Maybe<Scalars['Int']>;
  /** The unique ID for a `ConfigurableProductOptions` object */
  uid: Scalars['ID'];
  /** Indicates whether the option is the default */
  use_default?: Maybe<Scalars['Boolean']>;
  /** An array that defines the value_index codes assigned to the configurable product */
  values?: Maybe<Array<Maybe<ConfigurableProductOptionsValues>>>;
}

/** Metadata corresponding to the configurable options selection. */
export interface ConfigurableProductOptionsSelection {
  /** Product images and videos corresponding to the specified configurable options selection. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /** Configurable options available for further selection based on current selection. */
  options_available_for_selection?: Maybe<Array<Maybe<ConfigurableOptionAvailableForSelection>>>;
  /** Variant represented by the specified configurable options selection. It is expected to be null, until selections are made for each configurable option. */
  variant?: Maybe<SimpleProduct>;
}

/** ConfigurableProductOptionsValues contains the index number assigned to a configurable product option */
export interface ConfigurableProductOptionsValues {
  /** The label of the product on the default store */
  default_label?: Maybe<Scalars['String']>;
  /** The label of the product */
  label?: Maybe<Scalars['String']>;
  /** The label of the product on the current store */
  store_label?: Maybe<Scalars['String']>;
  /** Swatch data for configurable product option */
  swatch_data?: Maybe<SwatchDataInterface>;
  /** The unique ID for a `ConfigurableProductOptionsValues` object */
  uid?: Maybe<Scalars['ID']>;
  /** Indicates whether to use the default_label */
  use_default_value?: Maybe<Scalars['Boolean']>;
  /**
   * A unique index number assigned to the configurable product option
   * @deprecated Use `uid` instead
   */
  value_index?: Maybe<Scalars['Int']>;
}

/** An array containing all the simple product variants of a configurable product */
export interface ConfigurableVariant {
  attributes?: Maybe<Array<Maybe<ConfigurableAttributeOption>>>;
  product?: Maybe<SimpleProduct>;
}

/** A configurable product wish list item */
export interface ConfigurableWishlistItem extends WishlistItemInterface {
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** The SKU of the simple product corresponding to a set of selected configurable options */
  child_sku: Scalars['String'];
  /** An array of selected configurable options */
  configurable_options?: Maybe<Array<Maybe<SelectedConfigurableOption>>>;
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
}

export interface Country {
  available_regions?: Maybe<Array<Maybe<Region>>>;
  full_name_english?: Maybe<Scalars['String']>;
  full_name_locale?: Maybe<Scalars['String']>;
  /** The unique ID for a `Country` object. */
  id?: Maybe<Scalars['String']>;
  three_letter_abbreviation?: Maybe<Scalars['String']>;
  two_letter_abbreviation?: Maybe<Scalars['String']>;
}

/** The list of countries codes */
export enum CountryCodeEnum {
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua & Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Netherlands Antilles */
  An = 'AN',
  /** Angola */
  Ao = 'AO',
  /** Antarctica */
  Aq = 'AQ',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Åland Islands */
  Ax = 'AX',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia & Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** St. Barthélemy */
  Bl = 'BL',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei */
  Bn = 'BN',
  /** Bolivia */
  Bo = 'BO',
  /** Brazil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Bouvet Island */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos (Keeling) Islands */
  Cc = 'CC',
  /** Congo-Kinshasa */
  Cd = 'CD',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo-Brazzaville */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Côte d’Ivoire */
  Ci = 'CI',
  /** Cook Islands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cape Verde */
  Cv = 'CV',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czech Republic */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands */
  Fk = 'FK',
  /** Micronesia */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Guernsey */
  Gg = 'GG',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** South Georgia & South Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong SAR China */
  Hk = 'HK',
  /** Heard &amp; McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatia */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** Isle of Man */
  Im = 'IM',
  /** India */
  In = 'IN',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** Iraq */
  Iq = 'IQ',
  /** Iran */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jersey */
  Je = 'JE',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** St. Kitts & Nevis */
  Kn = 'KN',
  /** North Korea */
  Kp = 'KP',
  /** South Korea */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Laos */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** St. Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova */
  Md = 'MD',
  /** Montenegro */
  Me = 'ME',
  /** St. Martin */
  Mf = 'MF',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** Macedonia */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar (Burma) */
  Mm = 'MM',
  /** Mongolia */
  Mn = 'MN',
  /** Macau SAR China */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** St. Pierre & Miquelon */
  Pm = 'PM',
  /** Pitcairn Islands */
  Pn = 'PN',
  /** Palestinian Territories */
  Ps = 'PS',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Serbia */
  Rs = 'RS',
  /** Russia */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** St. Helena */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard & Jan Mayen */
  Sj = 'SJ',
  /** Slovakia */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** São Tomé & Príncipe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Syria */
  Sy = 'SY',
  /** Swaziland */
  Sz = 'SZ',
  /** Turks & Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Timor-Leste */
  Tl = 'TL',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** Turkey */
  Tr = 'TR',
  /** Trinidad & Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan */
  Tw = 'TW',
  /** Tanzania */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** U.S. Outlying Islands */
  Um = 'UM',
  /** United States */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Vatican City */
  Va = 'VA',
  /** St. Vincent & Grenadines */
  Vc = 'VC',
  /** Venezuela */
  Ve = 'VE',
  /** British Virgin Islands */
  Vg = 'VG',
  /** U.S. Virgin Islands */
  Vi = 'VI',
  /** Vietnam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis & Futuna */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW'
}

export interface CreateCompareListInput {
  /** An array of product IDs to add to the compare list */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>;
}

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export interface CreatePayflowProTokenOutput {
  response_message: Scalars['String'];
  result: Scalars['Int'];
  result_code: Scalars['Int'];
  secure_token: Scalars['String'];
  secure_token_id: Scalars['String'];
}

export interface CreateProductReviewInput {
  /** The customer's nickname. Defaults to the customer name, if logged in */
  nickname: Scalars['String'];
  /** Ratings details by category. e.g price: 5, quality: 4 etc */
  ratings: Array<Maybe<ProductReviewRatingInput>>;
  /** The SKU of the reviewed product */
  sku: Scalars['String'];
  /** The summary (title) of the review */
  summary: Scalars['String'];
  /** The review text. */
  text: Scalars['String'];
}

export interface CreateProductReviewOutput {
  /** Contains the completed product review */
  review: ProductReview;
}

/** Required fields for Payflow Pro and Payments Pro credit card payments */
export interface CreditCardDetailsInput {
  /** Credit card expiration month */
  cc_exp_month: Scalars['Int'];
  /** Credit card expiration year */
  cc_exp_year: Scalars['Int'];
  /** Last 4 digits of the credit card */
  cc_last_4: Scalars['Int'];
  /** Credit card type */
  cc_type: Scalars['String'];
}

/** Credit memo details */
export interface CreditMemo {
  /** Comments on the credit memo */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `CreditMemo` object */
  id: Scalars['ID'];
  /** An array containing details about refunded items */
  items?: Maybe<Array<Maybe<CreditMemoItemInterface>>>;
  /** The sequential credit memo number */
  number: Scalars['String'];
  /** Contains details about the total refunded amount */
  total?: Maybe<CreditMemoTotal>;
}

export interface CreditMemoItem extends CreditMemoItemInterface {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
}

/** Credit memo item details */
export interface CreditMemoItemInterface {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
}

/** Credit memo price details */
export interface CreditMemoTotal {
  /** An adjustment manually applied to the order */
  adjustment: Money;
  /** The final base grand total amount in the base currency */
  base_grand_total: Money;
  /** The applied discounts to the credit memo */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Money;
  /** Contains details about the shipping and handling costs for the credit memo */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes */
  subtotal: Money;
  /** The credit memo tax details */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the credit memo */
  total_shipping: Money;
  /** The amount of tax applied to the credit memo */
  total_tax: Money;
}

export interface Currency {
  available_currency_codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  base_currency_code?: Maybe<Scalars['String']>;
  base_currency_symbol?: Maybe<Scalars['String']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_code`. */
  default_display_currecy_code?: Maybe<Scalars['String']>;
  /** @deprecated Symbol was missed. Use `default_display_currency_symbol`. */
  default_display_currecy_symbol?: Maybe<Scalars['String']>;
  default_display_currency_code?: Maybe<Scalars['String']>;
  default_display_currency_symbol?: Maybe<Scalars['String']>;
  exchange_rates?: Maybe<Array<Maybe<ExchangeRate>>>;
}

/** The list of available currency codes */
export enum CurrencyEnum {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azm = 'AZM',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btn = 'BTN',
  Buk = 'BUK',
  Bwp = 'BWP',
  Byn = 'BYN',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Che = 'CHE',
  Chf = 'CHF',
  Chw = 'CHW',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cup = 'CUP',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Eek = 'EEK',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gek = 'GEK',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gqe = 'GQE',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Lsm = 'LSM',
  Ltl = 'LTL',
  Lvl = 'LVL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mro = 'MRO',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nic = 'NIC',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Rhd = 'RHD',
  Rol = 'ROL',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Skk = 'SKK',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Std = 'STD',
  Svc = 'SVC',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmm = 'TMM',
  Tnd = 'TND',
  Top = 'TOP',
  Trl = 'TRL',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Veb = 'VEB',
  Vef = 'VEF',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xcd = 'XCD',
  Xof = 'XOF',
  Xpf = 'XPF',
  Yer = 'YER',
  Ytl = 'YTL',
  Zar = 'ZAR',
  Zmk = 'ZMK',
  Zwd = 'ZWD'
}

/** CustomAttributeMetadata defines an array of attribute_codes and entity_types */
export interface CustomAttributeMetadata {
  /** An array of attributes */
  items?: Maybe<Array<Maybe<Attribute>>>;
}

/** Customer defines the customer name and address and other details */
export interface Customer {
  /** An array containing the customer's shipping and billing addresses */
  addresses?: Maybe<Array<Maybe<CustomerAddress>>>;
  /** Indicates whether the customer has enabled remote shopping assistance */
  allow_remote_shopping_assistance: Scalars['Boolean'];
  /** The contents of the customer's compare list */
  compare_list?: Maybe<CompareList>;
  /** Timestamp indicating when the account was created */
  created_at?: Maybe<Scalars['String']>;
  /** The customer's date of birth */
  date_of_birth?: Maybe<Scalars['String']>;
  /** The ID assigned to the billing address */
  default_billing?: Maybe<Scalars['String']>;
  /** The ID assigned to the shipping address */
  default_shipping?: Maybe<Scalars['String']>;
  /**
   * The customer's date of birth
   * @deprecated Use `date_of_birth` instead
   */
  dob?: Maybe<Scalars['String']>;
  /** The customer's email address. Required */
  email?: Maybe<Scalars['String']>;
  /** The customer's first name */
  firstname?: Maybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: Maybe<Scalars['Int']>;
  /** @deprecated Customer group should not be exposed in the storefront scenarios */
  group_id?: Maybe<Scalars['Int']>;
  /**
   * The ID assigned to the customer
   * @deprecated id is not needed as part of Customer because on server side it can be identified based on customer token used for authentication. There is no need to know customer ID on the client side.
   */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: Maybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname?: Maybe<Scalars['String']>;
  /** The customer's middle name */
  middlename?: Maybe<Scalars['String']>;
  orders?: Maybe<CustomerOrders>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** Contains the customer's product reviews */
  reviews: ProductReviews;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers) */
  taxvat?: Maybe<Scalars['String']>;
  /**
   * Contains a customer's wish lists
   * @deprecated Use `Customer.wishlists` or `Customer.wishlist_v2`
   */
  wishlist: Wishlist;
  /** Retrieve the specified wish list identified by the unique ID for a `Wishlist` object */
  wishlist_v2?: Maybe<Wishlist>;
  /** An array of wishlists. In Magento Open Source, customers are limited to one wish list. The number of wish lists is configurable for Magento Commerce */
  wishlists: Array<Maybe<Wishlist>>;
}


/** Customer defines the customer name and address and other details */
export interface CustomerOrdersArgs {
  currentPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<CustomerOrdersFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
}


/** Customer defines the customer name and address and other details */
export interface CustomerReviewsArgs {
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}


/** Customer defines the customer name and address and other details */
export interface CustomerWishlist_V2Args {
  id: Scalars['ID'];
}


/** Customer defines the customer name and address and other details */
export interface CustomerWishlistsArgs {
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}

/** CustomerAddress contains detailed information about a customer's billing and shipping addresses */
export interface CustomerAddress {
  /** The city or town */
  city?: Maybe<Scalars['String']>;
  /** The customer's company */
  company?: Maybe<Scalars['String']>;
  /** The customer's country */
  country_code?: Maybe<CountryCodeEnum>;
  /**
   * The customer's country
   * @deprecated Use `country_code` instead.
   */
  country_id?: Maybe<Scalars['String']>;
  /** @deprecated Custom attributes should not be put into container */
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /**
   * The customer ID
   * @deprecated customer_id is not needed as part of CustomerAddress, address ID (id) is unique identifier for the addresses.
   */
  customer_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the address is the default billing address */
  default_billing?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the address is the default shipping address */
  default_shipping?: Maybe<Scalars['Boolean']>;
  /** Address extension attributes */
  extension_attributes?: Maybe<Array<Maybe<CustomerAddressAttribute>>>;
  /** The fax number */
  fax?: Maybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address */
  firstname?: Maybe<Scalars['String']>;
  /** The ID assigned to the address object */
  id?: Maybe<Scalars['Int']>;
  /** The family name of the person associated with the shipping/billing address */
  lastname?: Maybe<Scalars['String']>;
  /** The middle name of the person associated with the shipping/billing address */
  middlename?: Maybe<Scalars['String']>;
  /** The customer's ZIP or postal code */
  postcode?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** An object containing the region name, region code, and region ID */
  region?: Maybe<CustomerAddressRegion>;
  /** The unique ID for a pre-defined region */
  region_id?: Maybe<Scalars['Int']>;
  /** An array of strings that define the street number and name */
  street?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The telephone number */
  telephone?: Maybe<Scalars['String']>;
  /** The customer's Value-added tax (VAT) number (for corporate customers) */
  vat_id?: Maybe<Scalars['String']>;
}

export interface CustomerAddressAttribute {
  /** Attribute code */
  attribute_code?: Maybe<Scalars['String']>;
  /** Attribute value */
  value?: Maybe<Scalars['String']>;
}

export interface CustomerAddressAttributeInput {
  /** Attribute code */
  attribute_code: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
}

export interface CustomerAddressInput {
  /** The city or town */
  city?: Maybe<Scalars['String']>;
  /** The customer's company */
  company?: Maybe<Scalars['String']>;
  /** The customer's country */
  country_code?: Maybe<CountryCodeEnum>;
  /** Deprecated: use `country_code` instead. */
  country_id?: Maybe<CountryCodeEnum>;
  /** Deprecated: Custom attributes should not be put into container. */
  custom_attributes?: Maybe<Array<Maybe<CustomerAddressAttributeInput>>>;
  /** Indicates whether the address is the default billing address */
  default_billing?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the address is the default shipping address */
  default_shipping?: Maybe<Scalars['Boolean']>;
  /** The fax number */
  fax?: Maybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address */
  firstname?: Maybe<Scalars['String']>;
  /** The family name of the person associated with the shipping/billing address */
  lastname?: Maybe<Scalars['String']>;
  /** The middle name of the person associated with the shipping/billing address */
  middlename?: Maybe<Scalars['String']>;
  /** The customer's ZIP or postal code */
  postcode?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** An object containing the region name, region code, and region ID */
  region?: Maybe<CustomerAddressRegionInput>;
  /** An array of strings that define the street number and name */
  street?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The telephone number */
  telephone?: Maybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  vat_id?: Maybe<Scalars['String']>;
}

/** CustomerAddressRegion defines the customer's state or province */
export interface CustomerAddressRegion {
  /** The state or province name */
  region?: Maybe<Scalars['String']>;
  /** The address region code */
  region_code?: Maybe<Scalars['String']>;
  /** The unique ID for a pre-defined region */
  region_id?: Maybe<Scalars['Int']>;
}

/** CustomerAddressRegionInput defines the customer's state or province */
export interface CustomerAddressRegionInput {
  /** The state or province name */
  region?: Maybe<Scalars['String']>;
  /** The address region code */
  region_code?: Maybe<Scalars['String']>;
  /** The unique ID for a pre-defined region */
  region_id?: Maybe<Scalars['Int']>;
}

export interface CustomerCreateInput {
  /** Indicates whether the customer has enabled remote shopping assistance */
  allow_remote_shopping_assistance?: Maybe<Scalars['Boolean']>;
  /** The customer's date of birth */
  date_of_birth?: Maybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: Maybe<Scalars['String']>;
  /** The customer's email address. Required for customer creation */
  email: Scalars['String'];
  /** The customer's first name */
  firstname: Scalars['String'];
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: Maybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: Maybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname: Scalars['String'];
  /** The customer's middle name */
  middlename?: Maybe<Scalars['String']>;
  /** The customer's password */
  password?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: Maybe<Scalars['String']>;
}

export interface CustomerDownloadableProduct {
  date?: Maybe<Scalars['String']>;
  download_url?: Maybe<Scalars['String']>;
  order_increment_id?: Maybe<Scalars['String']>;
  remaining_downloads?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
}

export interface CustomerDownloadableProducts {
  /** List of purchased downloadable items */
  items?: Maybe<Array<Maybe<CustomerDownloadableProduct>>>;
}

export interface CustomerInput {
  /** The customer's date of birth */
  date_of_birth?: Maybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: Maybe<Scalars['String']>;
  /** The customer's email address. Required for customer creation */
  email?: Maybe<Scalars['String']>;
  /** The customer's first name */
  firstname?: Maybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: Maybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: Maybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname?: Maybe<Scalars['String']>;
  /** The customer's middle name */
  middlename?: Maybe<Scalars['String']>;
  /** The customer's password */
  password?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: Maybe<Scalars['String']>;
}

/** Contains details about each of the customer's orders */
export interface CustomerOrder {
  /** The billing address for the order */
  billing_address?: Maybe<OrderAddress>;
  /** The shipping carrier for the order delivery */
  carrier?: Maybe<Scalars['String']>;
  /** Comments about the order */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** @deprecated Use the order_date attribute instead */
  created_at?: Maybe<Scalars['String']>;
  /** A list of credit memos */
  credit_memos?: Maybe<Array<Maybe<CreditMemo>>>;
  /** The entered gift message for the order */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use the totals.grand_total attribute instead */
  grand_total?: Maybe<Scalars['Float']>;
  /** The unique ID for a `CustomerOrder` object */
  id: Scalars['ID'];
  /** @deprecated Use the id attribute instead */
  increment_id?: Maybe<Scalars['String']>;
  /** A list of invoices for the order */
  invoices: Array<Maybe<Invoice>>;
  /** An array containing the items purchased in this order */
  items?: Maybe<Array<Maybe<OrderItemInterface>>>;
  /** The order number */
  number: Scalars['String'];
  /** The date the order was placed */
  order_date: Scalars['String'];
  /** @deprecated Use the number attribute instead */
  order_number: Scalars['String'];
  /** Payment details for the order */
  payment_methods?: Maybe<Array<Maybe<OrderPaymentMethod>>>;
  /** A list of shipments for the order */
  shipments?: Maybe<Array<Maybe<OrderShipment>>>;
  /** The shipping address for the order */
  shipping_address?: Maybe<OrderAddress>;
  /** The delivery method for the order */
  shipping_method?: Maybe<Scalars['String']>;
  /** The current status of the order */
  status: Scalars['String'];
  /** Contains details about the calculated totals for this order */
  total?: Maybe<OrderTotal>;
}

/** The collection of orders that match the conditions defined in the filter */
export interface CustomerOrders {
  /** An array of customer orders */
  items: Array<Maybe<CustomerOrder>>;
  /** An object that includes the current_page, page_info, and page_size values specified in the query */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The total count of customer orders */
  total_count?: Maybe<Scalars['Int']>;
}

/** Identifies the filter to use for filtering orders. */
export interface CustomerOrdersFilterInput {
  /** Filters by order number. */
  number?: Maybe<FilterStringTypeInput>;
}

export interface CustomerOutput {
  customer: Customer;
}

export interface CustomerPaymentTokens {
  /** An array of payment tokens */
  items: Array<Maybe<PaymentToken>>;
}

export interface CustomerToken {
  /** The customer token */
  token?: Maybe<Scalars['String']>;
}

export interface CustomerUpdateInput {
  /** Indicates whether the customer has enabled remote shopping assistance */
  allow_remote_shopping_assistance?: Maybe<Scalars['Boolean']>;
  /** The customer's date of birth */
  date_of_birth?: Maybe<Scalars['String']>;
  /** Deprecated: Use `date_of_birth` instead */
  dob?: Maybe<Scalars['String']>;
  /** The customer's first name */
  firstname?: Maybe<Scalars['String']>;
  /** The customer's gender (Male - 1, Female - 2) */
  gender?: Maybe<Scalars['Int']>;
  /** Indicates whether the customer is subscribed to the company's newsletter */
  is_subscribed?: Maybe<Scalars['Boolean']>;
  /** The customer's family name */
  lastname?: Maybe<Scalars['String']>;
  /** The customer's middle name */
  middlename?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The customer's Tax/VAT number (for corporate customers) */
  taxvat?: Maybe<Scalars['String']>;
}

/** CustomizableAreaOption contains information about a text area that is defined as part of a customizable option. */
export interface CustomizableAreaOption extends CustomizableOptionInterface {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a text area. */
  value?: Maybe<CustomizableAreaValue>;
}

/** CustomizableAreaValue defines the price and sku of a product whose page contains a customized text area. */
export interface CustomizableAreaValue {
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableAreaValue` object. */
  uid: Scalars['ID'];
}

/** CustomizableCheckbbixOption contains information about a set of checkbox values that are defined as part of a customizable option. */
export interface CustomizableCheckboxOption extends CustomizableOptionInterface {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines a set of checkbox values. */
  value?: Maybe<Array<Maybe<CustomizableCheckboxValue>>>;
}

/** CustomizableCheckboxValue defines the price and sku of a product whose page contains a customized set of checkbox values. */
export interface CustomizableCheckboxValue {
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the checkbox value is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableCheckboxValue` object. */
  uid: Scalars['ID'];
}

/** CustomizableDateOption contains information about a date picker that is defined as part of a customizable option. */
export interface CustomizableDateOption extends CustomizableOptionInterface {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a date field in a customizable option. */
  value?: Maybe<CustomizableDateValue>;
}

/** CustomizableDateValue defines the price and sku of a product whose page contains a customized date picker. */
export interface CustomizableDateValue {
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableDateValue` object. */
  uid: Scalars['ID'];
}

/** CustomizableDropDownOption contains information about a drop down menu that is defined as part of a customizable option. */
export interface CustomizableDropDownOption extends CustomizableOptionInterface {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines the set of options for a drop down menu. */
  value?: Maybe<Array<Maybe<CustomizableDropDownValue>>>;
}

/** CustomizableDropDownValue defines the price and sku of a product whose page contains a customized drop down menu. */
export interface CustomizableDropDownValue {
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableDropDownValue` object. */
  uid: Scalars['ID'];
}

/** CustomizableFieldOption contains information about a text field that is defined as part of a customizable option. */
export interface CustomizableFieldOption extends CustomizableOptionInterface {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a text field. */
  value?: Maybe<CustomizableFieldValue>;
}

/** CustomizableFieldValue defines the price and sku of a product whose page contains a customized text field. */
export interface CustomizableFieldValue {
  /** The maximum number of characters that can be entered for this customizable option. */
  max_characters?: Maybe<Scalars['Int']>;
  /** The price of the custom value. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableFieldValue` object. */
  uid: Scalars['ID'];
}

/** CustomizableFileOption contains information about a file picker that is defined as part of a customizable option. */
export interface CustomizableFileOption extends CustomizableOptionInterface {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** The Stock Keeping Unit of the base product. */
  product_sku?: Maybe<Scalars['String']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An object that defines a file value. */
  value?: Maybe<CustomizableFileValue>;
}

/** CustomizableFileValue defines the price and sku of a product whose page contains a customized file picker. */
export interface CustomizableFileValue {
  /** The file extension to accept. */
  file_extension?: Maybe<Scalars['String']>;
  /** The maximum width of an image. */
  image_size_x?: Maybe<Scalars['Int']>;
  /** The maximum height of an image. */
  image_size_y?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableFileValue` object. */
  uid: Scalars['ID'];
}

/** CustomizableMultipleOption contains information about a multiselect that is defined as part of a customizable option. */
export interface CustomizableMultipleOption extends CustomizableOptionInterface {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines the set of options for a multiselect. */
  value?: Maybe<Array<Maybe<CustomizableMultipleValue>>>;
}

/** CustomizableMultipleValue defines the price and sku of a product whose page contains a customized multiselect. */
export interface CustomizableMultipleValue {
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableMultipleValue` object. */
  uid: Scalars['ID'];
}

export interface CustomizableOptionInput {
  /** The customizable option id of the product */
  id?: Maybe<Scalars['Int']>;
  /** The string value of the option */
  value_string: Scalars['String'];
}

/** The CustomizableOptionInterface contains basic information about a customizable option. It can be implemented by several types of configurable options. */
export interface CustomizableOptionInterface {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
}

/** CustomizableProductInterface contains information about customizable product options. */
export interface CustomizableProductInterface {
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
}

/** CustomizableRadioOption contains information about a set of radio buttons that are defined as part of a customizable option. */
export interface CustomizableRadioOption extends CustomizableOptionInterface {
  /**
   * Option ID.
   * @deprecated Use `uid` instead
   */
  option_id?: Maybe<Scalars['Int']>;
  /** Indicates whether the option is required. */
  required?: Maybe<Scalars['Boolean']>;
  /** The order in which the option is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableOptionInterface` object. */
  uid: Scalars['ID'];
  /** An array that defines a set of radio buttons. */
  value?: Maybe<Array<Maybe<CustomizableRadioValue>>>;
}

/** CustomizableRadioValue defines the price and sku of a product whose page contains a customized set of radio buttons. */
export interface CustomizableRadioValue {
  /** The ID assigned to the value. */
  option_type_id?: Maybe<Scalars['Int']>;
  /** The price assigned to this option. */
  price?: Maybe<Scalars['Float']>;
  /** FIXED, PERCENT, or DYNAMIC. */
  price_type?: Maybe<PriceTypeEnum>;
  /** The Stock Keeping Unit for this option. */
  sku?: Maybe<Scalars['String']>;
  /** The order in which the radio button is displayed. */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name for this option. */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `CustomizableRadioValue` object. */
  uid: Scalars['ID'];
}

export interface DeleteCompareListOutput {
  /** Indicates whether the compare list was successfully deleted */
  result: Scalars['Boolean'];
}

export interface DeletePaymentTokenOutput {
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  result: Scalars['Boolean'];
}

/** Defines an individual discount. A discount can be applied to the cart as a whole or to an item. */
export interface Discount {
  /** The amount of the discount */
  amount: Money;
  /** A description of the discount */
  label: Scalars['String'];
}

/** Downloadable Cart Item */
export interface DownloadableCartItem extends CartItemInterface {
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  /** An array containing information about the links for the added to cart downloadable product */
  links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** DownloadableProductSamples defines characteristics of a downloadable product */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
}

export interface DownloadableCreditMemoItem extends CreditMemoItemInterface {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are refunded from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for a `CreditMemoItemInterface` object */
  id: Scalars['ID'];
  /** The order item the credit memo is applied to */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product, including selected options */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
}

export enum DownloadableFileTypeEnum {
  File = 'FILE',
  Url = 'URL'
}

export interface DownloadableInvoiceItem extends InvoiceItemInterface {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are invoiced from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
}

/** DownloadableProductLinks defines characteristics of a downloadable product */
export interface DownloadableItemsLinks {
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the link */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `DownloadableItemsLinks` object. */
  uid: Scalars['ID'];
}

export interface DownloadableOrderItem extends OrderItemInterface {
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** A list of downloadable links that are ordered from the downloadable product */
  downloadable_links?: Maybe<Array<Maybe<DownloadableItemsLinks>>>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
}

/** DownloadableProduct defines a product that the customer downloads */
export interface DownloadableProduct extends CustomizableProductInterface, ProductInterface {
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  /** An array containing information about the links for this downloadable product */
  downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** An array containing information about samples of this downloadable product. */
  downloadable_product_samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A value of 1 indicates that each link in the array must be purchased separately */
  links_purchased_separately?: Maybe<Scalars['Int']>;
  /** The heading above the list of downloadable products */
  links_title?: Maybe<Scalars['String']>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
}


/** DownloadableProduct defines a product that the customer downloads */
export interface DownloadableProductReviewsArgs {
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}

export interface DownloadableProductCartItemInput {
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
  data: CartItemInput;
  downloadable_product_links?: Maybe<Array<Maybe<DownloadableProductLinksInput>>>;
}

/** DownloadableProductLinks defines characteristics of a downloadable product */
export interface DownloadableProductLinks {
  /** @deprecated This information should not be exposed on frontend */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated This information should not be exposed on frontend */
  is_shareable?: Maybe<Scalars['Boolean']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  link_type?: Maybe<DownloadableFileTypeEnum>;
  /** @deprecated This information should not be exposed on frontend */
  number_of_downloads?: Maybe<Scalars['Int']>;
  /** The price of the downloadable product */
  price?: Maybe<Scalars['Float']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** URL to the downloadable sample */
  sample_url?: Maybe<Scalars['String']>;
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the link */
  title?: Maybe<Scalars['String']>;
  /** The unique ID for a `DownloadableProductLinks` object. */
  uid: Scalars['ID'];
}

export interface DownloadableProductLinksInput {
  link_id: Scalars['Int'];
}

/** DownloadableProductSamples defines characteristics of a downloadable product */
export interface DownloadableProductSamples {
  /** @deprecated This information should not be exposed on frontend */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_file?: Maybe<Scalars['String']>;
  /** @deprecated `sample_url` serves to get the downloadable sample */
  sample_type?: Maybe<DownloadableFileTypeEnum>;
  /** URL to the downloadable sample */
  sample_url?: Maybe<Scalars['String']>;
  /** A number indicating the sort order */
  sort_order?: Maybe<Scalars['Int']>;
  /** The display name of the sample */
  title?: Maybe<Scalars['String']>;
}

/** A downloadable product wish list item */
export interface DownloadableWishlistItem extends WishlistItemInterface {
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** An array containing information about the selected links */
  links_v2?: Maybe<Array<Maybe<DownloadableProductLinks>>>;
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
  /** An array containing information about the selected samples */
  samples?: Maybe<Array<Maybe<DownloadableProductSamples>>>;
}

/** Defines a customer-entered option */
export interface EnteredOptionInput {
  /** The unique ID for a `CustomizableFieldOption`, `CustomizableFileOption`, `CustomizableAreaOption`, etc. of `CustomizableOptionInterface` objects */
  uid: Scalars['ID'];
  /** Text the customer entered */
  value: Scalars['String'];
}

/** EntityUrl is an output object containing the `id`, `relative_url`, and `type` attributes */
export interface EntityUrl {
  /** @deprecated The canonical_url field is deprecated, use relative_url instead. */
  canonical_url?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface`, `CategoryInterface`, `CmsPage`, etc. object associated with the specified url. This could be a product UID, category UID, or cms page UID. */
  entity_uid?: Maybe<Scalars['ID']>;
  /**
   * The ID assigned to the object associated with the specified url. This could be a product ID, category ID, or page ID.
   * @deprecated Use `entity_uid` instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** 301 or 302 HTTP code for url permanent or temporary redirect or 0 for the 200 no redirect */
  redirectCode?: Maybe<Scalars['Int']>;
  /** The internal relative URL. If the specified  url is a redirect, the query returns the redirected URL, not the original. */
  relative_url?: Maybe<Scalars['String']>;
  /** One of PRODUCT, CATEGORY, or CMS_PAGE. */
  type?: Maybe<UrlRewriteEntityTypeEnum>;
}

export interface ExchangeRate {
  currency_to?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
}

/** Defines a filter that matches the input exactly. */
export interface FilterEqualTypeInput {
  /** A string to filter on */
  eq?: Maybe<Scalars['String']>;
  /** An array of values to filter on */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** Defines a filter that performs a fuzzy search. */
export interface FilterMatchTypeInput {
  /** One or more words to filter on */
  match?: Maybe<Scalars['String']>;
}

/** Defines a filter that matches a range of values, such as prices or dates. */
export interface FilterRangeTypeInput {
  /** The beginning of the range */
  from?: Maybe<Scalars['String']>;
  /** The end of the range */
  to?: Maybe<Scalars['String']>;
}

/** Defines a filter for an input string. */
export interface FilterStringTypeInput {
  /** Filters items that are exactly the same as the specified string. */
  eq?: Maybe<Scalars['String']>;
  /** Filters items that are exactly the same as entries specified in an array of strings. */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Defines a filter that performs a fuzzy search using the specified string. */
  match?: Maybe<Scalars['String']>;
}

/** FilterTypeInput specifies which action will be performed in a query  */
export interface FilterTypeInput {
  /** Equals */
  eq?: Maybe<Scalars['String']>;
  finset?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** From. Must be used with 'to' */
  from?: Maybe<Scalars['String']>;
  /** Greater than */
  gt?: Maybe<Scalars['String']>;
  /** Greater than or equal to */
  gteq?: Maybe<Scalars['String']>;
  /** In. The value can contain a set of comma-separated values */
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Like. The specified value can contain % (percent signs) to allow matching of 0 or more characters */
  like?: Maybe<Scalars['String']>;
  /** Less than */
  lt?: Maybe<Scalars['String']>;
  /** Less than or equal to */
  lteq?: Maybe<Scalars['String']>;
  /** More than or equal to */
  moreq?: Maybe<Scalars['String']>;
  /** Not equal to */
  neq?: Maybe<Scalars['String']>;
  /** Not in. The value can contain a set of comma-separated values */
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Not null */
  notnull?: Maybe<Scalars['String']>;
  /** Is null */
  null?: Maybe<Scalars['String']>;
  /** To. Must be used with 'from' */
  to?: Maybe<Scalars['String']>;
}

/** A single FPT that can be applied to a product price. */
export interface FixedProductTax {
  /** Amount of the FPT as a money object. */
  amount?: Maybe<Money>;
  /** The label assigned to the FPT to be displayed on the frontend. */
  label?: Maybe<Scalars['String']>;
}

/** This enumeration display settings for the fixed product tax */
export enum FixedProductTaxDisplaySettings {
  /** The displayed price does not include the FPT amount. The values of ProductPrice.fixed_product_taxes and the price including the FPT are displayed separately. This value corresponds to 'Excluding FPT, Including FPT description and final price' */
  ExcludeFptAndIncludeWithDetails = 'EXCLUDE_FPT_AND_INCLUDE_WITH_DETAILS',
  /** The displayed price does not include the FPT amount. The values from ProductPrice.fixed_product_taxes are not displayed. This value corresponds to 'Excluding FPT' */
  ExcludeFptWithoutDetails = 'EXCLUDE_FPT_WITHOUT_DETAILS',
  /** The FPT feature is not enabled. You can omit  ProductPrice.fixed_product_taxes from your query */
  FptDisabled = 'FPT_DISABLED',
  /** The displayed price includes the FPT amount without displaying the ProductPrice.fixed_product_taxes values. This value corresponds to 'Including FPT only' */
  IncludeFptWithoutDetails = 'INCLUDE_FPT_WITHOUT_DETAILS',
  /** The displayed price includes the FPT amount while displaying the values of ProductPrice.fixed_product_taxes separately. This value corresponds to 'Including FPT and FPT description' */
  IncludeFptWithDetails = 'INCLUDE_FPT_WITH_DETAILS'
}

export interface GenerateCustomerTokenAsAdminInput {
  /** The email address of the customer requesting remote shopping assistance */
  customer_email: Scalars['String'];
}

export interface GenerateCustomerTokenAsAdminOutput {
  /** The generated customer token */
  customer_token: Scalars['String'];
}

/** Contains the text of a gift message, its sender, and recipient */
export interface GiftMessage {
  /** Sender name */
  from: Scalars['String'];
  /** Gift message text */
  message: Scalars['String'];
  /** Recipient name */
  to: Scalars['String'];
}

/** Contains the text of a gift message, its sender, and recipient */
export interface GiftMessageInput {
  /** Sender name */
  from: Scalars['String'];
  /** Gift message text */
  message: Scalars['String'];
  /** Recipient name */
  to: Scalars['String'];
}

/** GroupedProduct defines a grouped product */
export interface GroupedProduct extends PhysicalProductInterface, ProductInterface {
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** An array containing grouped product items */
  items?: Maybe<Array<Maybe<GroupedProductItem>>>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
}


/** GroupedProduct defines a grouped product */
export interface GroupedProductReviewsArgs {
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}

/** GroupedProductItem contains information about an individual grouped product item */
export interface GroupedProductItem {
  /** The relative position of this item compared to the other group items */
  position?: Maybe<Scalars['Int']>;
  /** The ProductInterface object, which contains details about this product option */
  product?: Maybe<ProductInterface>;
  /** The quantity of this grouped product item */
  qty?: Maybe<Scalars['Float']>;
}

/** A grouped product wish list item */
export interface GroupedProductWishlistItem extends WishlistItemInterface {
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
}

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payments Pro Hosted Solution payment method. */
export interface HostedProInput {
  /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
}

/** Contains secure URL used for Payments Pro Hosted Solution payment method. */
export interface HostedProUrl {
  /** Secure Url generated by PayPal */
  secure_form_url?: Maybe<Scalars['String']>;
}

/** The required input to request the secure URL for Payments Pro Hosted Solution payment. */
export interface HostedProUrlInput {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
}

/** The object details of target path parameters */
export interface HttpQueryParameter {
  /** Parameter name */
  name?: Maybe<Scalars['String']>;
  /** Parameter value */
  value?: Maybe<Scalars['String']>;
}

export interface ImageSwatchData extends SwatchDataInterface {
  /** Thumbnail swatch image URL */
  thumbnail?: Maybe<Scalars['String']>;
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
}

/** Invoice details */
export interface Invoice {
  /** Comments on the invoice */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `Invoice` object */
  id: Scalars['ID'];
  /** Invoiced product details */
  items?: Maybe<Array<Maybe<InvoiceItemInterface>>>;
  /** Sequential invoice number */
  number: Scalars['String'];
  /** Invoice total amount details */
  total?: Maybe<InvoiceTotal>;
}

export interface InvoiceItem extends InvoiceItemInterface {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
}

/** Invoice item details */
export interface InvoiceItemInterface {
  /** Contains information about the final discount amount for the base product, including discounts on options */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The unique ID for a `InvoiceItemInterface` object */
  id: Scalars['ID'];
  /** Contains details about an individual order item */
  order_item?: Maybe<OrderItemInterface>;
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price for the base product including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
}

/** Contains price details from an invoice */
export interface InvoiceTotal {
  /** The final base grand total amount in the base currency */
  base_grand_total: Money;
  /** The applied discounts to the invoice */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Money;
  /** Contains details about the shipping and handling costs for the invoice */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the invoice, excluding shipping, discounts, and taxes */
  subtotal: Money;
  /** The invoice tax details */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the invoice */
  total_shipping: Money;
  /** The amount of tax applied to the invoice */
  total_tax: Money;
}

export interface IsEmailAvailableOutput {
  /** Is email availabel value */
  is_email_available?: Maybe<Scalars['Boolean']>;
}

/** A list of options of the selected bundle product */
export interface ItemSelectedBundleOption {
  /**
   * The unique ID for a `ItemSelectedBundleOption` object
   * @deprecated Use `uid` instead
   */
  id: Scalars['ID'];
  /** The label of the option */
  label: Scalars['String'];
  /** The unique ID for a `ItemSelectedBundleOption` object */
  uid: Scalars['ID'];
  /** A list of products that represent the values of the parent option */
  values?: Maybe<Array<Maybe<ItemSelectedBundleOptionValue>>>;
}

/** A list of values for the selected bundle product */
export interface ItemSelectedBundleOptionValue {
  /**
   * The unique ID for a `ItemSelectedBundleOptionValue` object
   * @deprecated Use `uid` instead
   */
  id: Scalars['ID'];
  /** The price of the child bundle product */
  price: Money;
  /** The name of the child bundle product */
  product_name: Scalars['String'];
  /** The SKU of the child bundle product */
  product_sku: Scalars['String'];
  /** Indicates how many of this bundle product were ordered */
  quantity: Scalars['Float'];
  /** The unique ID for a `ItemSelectedBundleOptionValue` object */
  uid: Scalars['ID'];
}

/** The key-value type */
export interface KeyValue {
  /** The name part of the name/value pair */
  name?: Maybe<Scalars['String']>;
  /** The value part of the name/value pair */
  value?: Maybe<Scalars['String']>;
}

export interface KlarnaInput {
  /** The authorization token must be provided to set any Klarna Payments method */
  authorization_token: Scalars['String'];
}

export interface LayerFilter {
  /**
   * Array of filter items.
   * @deprecated Use Aggregation.options instead.
   */
  filter_items?: Maybe<Array<Maybe<LayerFilterItemInterface>>>;
  /**
   * Count of filter items in filter group.
   * @deprecated Use Aggregation.count instead.
   */
  filter_items_count?: Maybe<Scalars['Int']>;
  /**
   * Layered navigation filter name.
   * @deprecated Use Aggregation.label instead.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * Request variable name for filter query.
   * @deprecated Use Aggregation.attribute_code instead.
   */
  request_var?: Maybe<Scalars['String']>;
}

export interface LayerFilterItem extends LayerFilterItemInterface {
  /**
   * Count of items by filter.
   * @deprecated Use AggregationOption.count instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * Filter label.
   * @deprecated Use AggregationOption.label instead.
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Value for filter request variable to be used in query.
   * @deprecated Use AggregationOption.value instead.
   */
  value_string?: Maybe<Scalars['String']>;
}

export interface LayerFilterItemInterface {
  /**
   * Count of items by filter.
   * @deprecated Use AggregationOption.count instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * Filter label.
   * @deprecated Use AggregationOption.label instead.
   */
  label?: Maybe<Scalars['String']>;
  /**
   * Value for filter request variable to be used in query.
   * @deprecated Use AggregationOption.value instead.
   */
  value_string?: Maybe<Scalars['String']>;
}

/** MediaGalleryEntry defines characteristics about images and videos associated with a specific product. */
export interface MediaGalleryEntry {
  /** Contains a ProductMediaGalleryEntriesContent object. */
  content?: Maybe<ProductMediaGalleryEntriesContent>;
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The path of the image on the server. */
  file?: Maybe<Scalars['String']>;
  /**
   * The identifier assigned to the object.
   * @deprecated Use `uid` instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The alt text displayed on the UI when the user points to the image. */
  label?: Maybe<Scalars['String']>;
  /** image or video. */
  media_type?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** Array of image types. It can have the following values: image, small_image, thumbnail. */
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique ID for a `MediaGalleryEntry` object. */
  uid: Scalars['ID'];
  /** Contains a ProductMediaGalleryEntriesVideoContent object. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
}

/** Contains basic information about a product image or video. */
export interface MediaGalleryInterface {
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
}

/** A Money object defines a monetary value, including a numeric value and a currency code. */
export interface Money {
  /** A three-letter currency code, such as USD or EUR */
  currency?: Maybe<CurrencyEnum>;
  /** A number expressing a monetary value */
  value?: Maybe<Scalars['Float']>;
}

export interface Mutation {
  addBundleProductsToCart?: Maybe<AddBundleProductsToCartOutput>;
  addConfigurableProductsToCart?: Maybe<AddConfigurableProductsToCartOutput>;
  addDownloadableProductsToCart?: Maybe<AddDownloadableProductsToCartOutput>;
  /** Add any type of product to the cart */
  addProductsToCart?: Maybe<AddProductsToCartOutput>;
  /** Add products to the specified compare list */
  addProductsToCompareList?: Maybe<CompareList>;
  /** Adds one or more products to the specified wish list. This mutation supports all product types */
  addProductsToWishlist?: Maybe<AddProductsToWishlistOutput>;
  addSimpleProductsToCart?: Maybe<AddSimpleProductsToCartOutput>;
  addVirtualProductsToCart?: Maybe<AddVirtualProductsToCartOutput>;
  applyCouponToCart?: Maybe<ApplyCouponToCartOutput>;
  /** Assign the specified compare list to the logged in customer */
  assignCompareListToCustomer?: Maybe<AssignCompareListToCustomerOutput>;
  /** Changes the password for the logged-in customer */
  changeCustomerPassword?: Maybe<Customer>;
  /** Creates Client Token for Braintree Javascript SDK initialization. */
  createBraintreeClientToken: Scalars['String'];
  /** Creates a new compare list. The compare list is saved for logged in customers */
  createCompareList?: Maybe<CompareList>;
  /** Create customer account */
  createCustomer?: Maybe<CustomerOutput>;
  /** Create customer address */
  createCustomerAddress?: Maybe<CustomerAddress>;
  /** Create customer account */
  createCustomerV2?: Maybe<CustomerOutput>;
  /** Creates an empty shopping cart for a guest or logged in user */
  createEmptyCart?: Maybe<Scalars['String']>;
  /** Creates a Klarna Payments Session. */
  createKlarnaPaymentsSession?: Maybe<CreateKlarnaPaymentsSessionOutput>;
  /** Initiates a transaction and receives a token. Use this mutation for Payflow Pro and Payments Pro payment methods */
  createPayflowProToken?: Maybe<CreatePayflowProTokenOutput>;
  /** Initiates an Express Checkout transaction and receives a token. Use this mutation for Express Checkout and Payments Standard payment methods. */
  createPaypalExpressToken?: Maybe<PaypalExpressTokenOutput>;
  /** Creates a product review for the specified SKU */
  createProductReview: CreateProductReviewOutput;
  /** Delete the specified compare list */
  deleteCompareList?: Maybe<DeleteCompareListOutput>;
  /** Delete customer address */
  deleteCustomerAddress?: Maybe<Scalars['Boolean']>;
  /** Delete a customer payment token */
  deletePaymentToken?: Maybe<DeletePaymentTokenOutput>;
  /** Retrieve the customer token */
  generateCustomerToken?: Maybe<CustomerToken>;
  /** Request a customer token so that an administrator can perform remote shopping assistance */
  generateCustomerTokenAsAdmin?: Maybe<GenerateCustomerTokenAsAdminOutput>;
  /** Handles payment response and saves payment in Quote. Use this mutations for Payflow Pro and Payments Pro payment methods. */
  handlePayflowProResponse?: Maybe<PayflowProResponseOutput>;
  /** Merges the source cart into the destination cart */
  mergeCarts: Cart;
  placeOrder?: Maybe<PlaceOrderOutput>;
  removeCouponFromCart?: Maybe<RemoveCouponFromCartOutput>;
  removeItemFromCart?: Maybe<RemoveItemFromCartOutput>;
  /** Remove products from the specified compare list */
  removeProductsFromCompareList?: Maybe<CompareList>;
  /** Removes one or more products from the specified wish list */
  removeProductsFromWishlist?: Maybe<RemoveProductsFromWishlistOutput>;
  /** Adds all products from a customer's previous order to the cart. */
  reorderItems?: Maybe<ReorderItemsOutput>;
  /** Request an email with a reset password token for the registered customer identified by the specified email. */
  requestPasswordResetEmail?: Maybe<Scalars['Boolean']>;
  /** Reset a customer's password using the reset password token that the customer received in an email after requesting it using requestPasswordResetEmail. */
  resetPassword?: Maybe<Scalars['Boolean']>;
  /** Revoke the customer token */
  revokeCustomerToken?: Maybe<RevokeCustomerTokenOutput>;
  /** Recommends Product by Sending Single/Multiple Email */
  sendEmailToFriend?: Maybe<SendEmailToFriendOutput>;
  setBillingAddressOnCart?: Maybe<SetBillingAddressOnCartOutput>;
  setGuestEmailOnCart?: Maybe<SetGuestEmailOnCartOutput>;
  /** @deprecated Should use setPaymentMethodOnCart and placeOrder mutations in single request. */
  setPaymentMethodAndPlaceOrder?: Maybe<PlaceOrderOutput>;
  setPaymentMethodOnCart?: Maybe<SetPaymentMethodOnCartOutput>;
  setShippingAddressesOnCart?: Maybe<SetShippingAddressesOnCartOutput>;
  setShippingMethodsOnCart?: Maybe<SetShippingMethodsOnCartOutput>;
  /** Subscribes the specified email to a newsletter */
  subscribeEmailToNewsletter?: Maybe<SubscribeEmailToNewsletterOutput>;
  updateCartItems?: Maybe<UpdateCartItemsOutput>;
  /** Deprecated. Use UpdateCustomerV2 instead. */
  updateCustomer?: Maybe<CustomerOutput>;
  /** Update customer address */
  updateCustomerAddress?: Maybe<CustomerAddress>;
  updateCustomerEmail?: Maybe<CustomerOutput>;
  /** Update the customer's personal information */
  updateCustomerV2?: Maybe<CustomerOutput>;
  /** Updates one or more products in the specified wish list */
  updateProductsInWishlist?: Maybe<UpdateProductsInWishlistOutput>;
}


export interface MutationAddBundleProductsToCartArgs {
  input?: Maybe<AddBundleProductsToCartInput>;
}


export interface MutationAddConfigurableProductsToCartArgs {
  input?: Maybe<AddConfigurableProductsToCartInput>;
}


export interface MutationAddDownloadableProductsToCartArgs {
  input?: Maybe<AddDownloadableProductsToCartInput>;
}


export interface MutationAddProductsToCartArgs {
  cartId: Scalars['String'];
  cartItems: Array<CartItemInput>;
}


export interface MutationAddProductsToCompareListArgs {
  input?: Maybe<AddProductsToCompareListInput>;
}


export interface MutationAddProductsToWishlistArgs {
  wishlistId: Scalars['ID'];
  wishlistItems: Array<WishlistItemInput>;
}


export interface MutationAddSimpleProductsToCartArgs {
  input?: Maybe<AddSimpleProductsToCartInput>;
}


export interface MutationAddVirtualProductsToCartArgs {
  input?: Maybe<AddVirtualProductsToCartInput>;
}


export interface MutationApplyCouponToCartArgs {
  input?: Maybe<ApplyCouponToCartInput>;
}


export interface MutationAssignCompareListToCustomerArgs {
  uid: Scalars['ID'];
}


export interface MutationChangeCustomerPasswordArgs {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
}


export interface MutationCreateCompareListArgs {
  input?: Maybe<CreateCompareListInput>;
}


export interface MutationCreateCustomerArgs {
  input: CustomerInput;
}


export interface MutationCreateCustomerAddressArgs {
  input: CustomerAddressInput;
}


export interface MutationCreateCustomerV2Args {
  input: CustomerCreateInput;
}


export interface MutationCreateEmptyCartArgs {
  input?: Maybe<CreateEmptyCartInput>;
}


export interface MutationCreateKlarnaPaymentsSessionArgs {
  input?: Maybe<CreateKlarnaPaymentsSessionInput>;
}


export interface MutationCreatePayflowProTokenArgs {
  input: PayflowProTokenInput;
}


export interface MutationCreatePaypalExpressTokenArgs {
  input: PaypalExpressTokenInput;
}


export interface MutationCreateProductReviewArgs {
  input: CreateProductReviewInput;
}


export interface MutationDeleteCompareListArgs {
  uid: Scalars['ID'];
}


export interface MutationDeleteCustomerAddressArgs {
  id: Scalars['Int'];
}


export interface MutationDeletePaymentTokenArgs {
  public_hash: Scalars['String'];
}


export interface MutationGenerateCustomerTokenArgs {
  email: Scalars['String'];
  password: Scalars['String'];
}


export interface MutationGenerateCustomerTokenAsAdminArgs {
  input: GenerateCustomerTokenAsAdminInput;
}


export interface MutationHandlePayflowProResponseArgs {
  input: PayflowProResponseInput;
}


export interface MutationMergeCartsArgs {
  destination_cart_id?: Maybe<Scalars['String']>;
  source_cart_id: Scalars['String'];
}


export interface MutationPlaceOrderArgs {
  input?: Maybe<PlaceOrderInput>;
}


export interface MutationRemoveCouponFromCartArgs {
  input?: Maybe<RemoveCouponFromCartInput>;
}


export interface MutationRemoveItemFromCartArgs {
  input?: Maybe<RemoveItemFromCartInput>;
}


export interface MutationRemoveProductsFromCompareListArgs {
  input?: Maybe<RemoveProductsFromCompareListInput>;
}


export interface MutationRemoveProductsFromWishlistArgs {
  wishlistId: Scalars['ID'];
  wishlistItemsIds: Array<Scalars['ID']>;
}


export interface MutationReorderItemsArgs {
  orderNumber: Scalars['String'];
}


export interface MutationRequestPasswordResetEmailArgs {
  email: Scalars['String'];
}


export interface MutationResetPasswordArgs {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  resetPasswordToken: Scalars['String'];
}


export interface MutationSendEmailToFriendArgs {
  input?: Maybe<SendEmailToFriendInput>;
}


export interface MutationSetBillingAddressOnCartArgs {
  input?: Maybe<SetBillingAddressOnCartInput>;
}


export interface MutationSetGuestEmailOnCartArgs {
  input?: Maybe<SetGuestEmailOnCartInput>;
}


export interface MutationSetPaymentMethodAndPlaceOrderArgs {
  input?: Maybe<SetPaymentMethodAndPlaceOrderInput>;
}


export interface MutationSetPaymentMethodOnCartArgs {
  input?: Maybe<SetPaymentMethodOnCartInput>;
}


export interface MutationSetShippingAddressesOnCartArgs {
  input?: Maybe<SetShippingAddressesOnCartInput>;
}


export interface MutationSetShippingMethodsOnCartArgs {
  input?: Maybe<SetShippingMethodsOnCartInput>;
}


export interface MutationSubscribeEmailToNewsletterArgs {
  email: Scalars['String'];
}


export interface MutationUpdateCartItemsArgs {
  input?: Maybe<UpdateCartItemsInput>;
}


export interface MutationUpdateCustomerArgs {
  input: CustomerInput;
}


export interface MutationUpdateCustomerAddressArgs {
  id: Scalars['Int'];
  input?: Maybe<CustomerAddressInput>;
}


export interface MutationUpdateCustomerEmailArgs {
  email: Scalars['String'];
  password: Scalars['String'];
}


export interface MutationUpdateCustomerV2Args {
  input: CustomerUpdateInput;
}


export interface MutationUpdateProductsInWishlistArgs {
  wishlistId: Scalars['ID'];
  wishlistItems: Array<WishlistItemUpdateInput>;
}

export interface Order {
  /** @deprecated The order_id field is deprecated, use order_number instead. */
  order_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `Order` object. */
  order_number: Scalars['String'];
}

/** OrderAddress contains detailed information about an order's billing and shipping addresses */
export interface OrderAddress {
  /** The city or town */
  city: Scalars['String'];
  /** The customer's company */
  company?: Maybe<Scalars['String']>;
  /** The customer's country */
  country_code?: Maybe<CountryCodeEnum>;
  /** The fax number */
  fax?: Maybe<Scalars['String']>;
  /** The first name of the person associated with the shipping/billing address */
  firstname: Scalars['String'];
  /** The family name of the person associated with the shipping/billing address */
  lastname: Scalars['String'];
  /** The middle name of the person associated with the shipping/billing address */
  middlename?: Maybe<Scalars['String']>;
  /** The customer's order ZIP or postal code */
  postcode?: Maybe<Scalars['String']>;
  /** An honorific, such as Dr., Mr., or Mrs. */
  prefix?: Maybe<Scalars['String']>;
  /** The state or province name */
  region?: Maybe<Scalars['String']>;
  /** The unique ID for a `Region` object of a pre-defined region */
  region_id?: Maybe<Scalars['ID']>;
  /** An array of strings that define the street number and name */
  street: Array<Maybe<Scalars['String']>>;
  /** A value such as Sr., Jr., or III */
  suffix?: Maybe<Scalars['String']>;
  /** The telephone number */
  telephone: Scalars['String'];
  /** The customer's Value-added tax (VAT) number (for corporate customers) */
  vat_id?: Maybe<Scalars['String']>;
}

export interface OrderItem extends OrderItemInterface {
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
}

/** Order item details */
export interface OrderItemInterface {
  /** The final discount information for the product */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The entered option for the base product, such as a logo or image */
  entered_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The unique ID for a `OrderItemInterface` object */
  id: Scalars['ID'];
  /** The name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** The sale price of the base product, including selected options */
  product_sale_price: Money;
  /** The SKU of the base product */
  product_sku: Scalars['String'];
  /** The type of product, such as simple, configurable, etc. */
  product_type?: Maybe<Scalars['String']>;
  /** URL key of the base product */
  product_url_key?: Maybe<Scalars['String']>;
  /** The number of canceled items */
  quantity_canceled?: Maybe<Scalars['Float']>;
  /** The number of invoiced items */
  quantity_invoiced?: Maybe<Scalars['Float']>;
  /** The number of units ordered for this item */
  quantity_ordered?: Maybe<Scalars['Float']>;
  /** The number of refunded items */
  quantity_refunded?: Maybe<Scalars['Float']>;
  /** The number of returned items */
  quantity_returned?: Maybe<Scalars['Float']>;
  /** The number of shipped items */
  quantity_shipped?: Maybe<Scalars['Float']>;
  /** The selected options for the base product, such as color or size */
  selected_options?: Maybe<Array<Maybe<OrderItemOption>>>;
  /** The status of the order item */
  status?: Maybe<Scalars['String']>;
}

/** Represents order item options like selected or entered */
export interface OrderItemOption {
  /** The name of the option */
  label: Scalars['String'];
  /** The value of the option */
  value: Scalars['String'];
}

/** Contains details about the payment method used to pay for the order */
export interface OrderPaymentMethod {
  /** Additional data per payment method type */
  additional_data?: Maybe<Array<Maybe<KeyValue>>>;
  /** The label that describes the payment method */
  name: Scalars['String'];
  /** The payment method code that indicates how the order was paid for */
  type: Scalars['String'];
}

/** Order shipment details */
export interface OrderShipment {
  /** Comments added to the shipment */
  comments?: Maybe<Array<Maybe<SalesCommentItem>>>;
  /** The unique ID for a `OrderShipment` object */
  id: Scalars['ID'];
  /** Contains items included in the shipment */
  items?: Maybe<Array<Maybe<ShipmentItemInterface>>>;
  /** The sequential credit shipment number */
  number: Scalars['String'];
  /** Contains shipment tracking details */
  tracking?: Maybe<Array<Maybe<ShipmentTracking>>>;
}

/** Contains details about the sales total amounts used to calculate the final price */
export interface OrderTotal {
  /** The final base grand total amount in the base currency */
  base_grand_total: Money;
  /** The applied discounts to the order */
  discounts?: Maybe<Array<Maybe<Discount>>>;
  /** The final total amount, including shipping, discounts, and taxes */
  grand_total: Money;
  /** Contains details about the shipping and handling costs for the order */
  shipping_handling?: Maybe<ShippingHandling>;
  /** The subtotal of the order, excluding shipping, discounts, and taxes */
  subtotal: Money;
  /** The order tax details */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The shipping amount for the order */
  total_shipping: Money;
  /** The amount of tax applied to the order */
  total_tax: Money;
}

/** Required input for Payflow Express Checkout payments */
export interface PayflowExpressInput {
  /** The unique ID of the PayPal user */
  payer_id: Scalars['String'];
  /** The token returned by the createPaypalExpressToken mutation */
  token: Scalars['String'];
}

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Link and Payments Advanced payment methods. */
export interface PayflowLinkInput {
  /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the transaction error page that PayPal will redirect to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String'];
  /** The relative URL of the order confirmation page that PayPal will redirect to when the payment is successful and additional confirmation is not needed. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
}

/** Mode for payment: TEST or LIVE. Applies to Payflow Link and Payments Advanced payment methods. */
export enum PayflowLinkMode {
  Live = 'LIVE',
  Test = 'TEST'
}

/** Contains information used to generate PayPal iframe for transaction. Applies to Payflow Link and Payments Advanced payment methods. */
export interface PayflowLinkToken {
  /** Mode for Payflow transaction */
  mode?: Maybe<PayflowLinkMode>;
  /** PayPal URL used for requesting Payflow form */
  paypal_url?: Maybe<Scalars['String']>;
  /** Secure token generated by PayPal */
  secure_token?: Maybe<Scalars['String']>;
  /** Secure token ID generated by PayPal */
  secure_token_id?: Maybe<Scalars['String']>;
}

/** Input required to fetch payment token information for Payflow Link and Payments Advanced payment methods. */
export interface PayflowLinkTokenInput {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
}

/** Required input for Payflow Pro and Payments Pro payment methods. */
export interface PayflowProInput {
  /** Required input for credit card related information */
  cc_details: CreditCardDetailsInput;
  /** States whether details about the customer's credit/debit card should be tokenized for later usage. Required only if Vault is enabled for PayPal Payflow Pro payment integration. */
  is_active_payment_token_enabler?: Maybe<Scalars['Boolean']>;
}

/** Input required to complete payment. Applies to Payflow Pro and Payments Pro payment methods. */
export interface PayflowProResponseInput {
  cart_id: Scalars['String'];
  paypal_payload: Scalars['String'];
}

export interface PayflowProResponseOutput {
  cart: Cart;
}

/** Contains the secure information used to authorize transaction. Applies to Payflow Pro and Payments Pro payment methods. */
export interface PayflowProToken {
  response_message: Scalars['String'];
  result: Scalars['Int'];
  result_code: Scalars['Int'];
  secure_token: Scalars['String'];
  secure_token_id: Scalars['String'];
}

/** Input required to fetch payment token information for Payflow Pro and Payments Pro payment methods. */
export interface PayflowProTokenInput {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** A set of relative URLs that PayPal uses for callback. */
  urls: PayflowProUrlInput;
}

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Payflow Pro and Payment Pro payment methods. */
export interface PayflowProUrlInput {
  /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the transaction error page that PayPal will redirect to upon payment error. If the full URL to this page is https://www.example.com/paypal/action/error.html, the relative URL is paypal/action/error.html. */
  error_url: Scalars['String'];
  /** The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
}

export interface PaymentMethodInput {
  braintree?: Maybe<BraintreeInput>;
  braintree_cc_vault?: Maybe<BraintreeCcVaultInput>;
  /** Payment method code */
  code: Scalars['String'];
  /** Required input for PayPal Hosted pro payments */
  hosted_pro?: Maybe<HostedProInput>;
  klarna?: Maybe<KlarnaInput>;
  /** Required input for Payflow Express Checkout payments */
  payflow_express?: Maybe<PayflowExpressInput>;
  /** Required input for PayPal Payflow Link and Payments Advanced payments */
  payflow_link?: Maybe<PayflowLinkInput>;
  /** Required input type for PayPal Payflow Pro and Payment Pro payments */
  payflowpro?: Maybe<PayflowProInput>;
  /** Required input type for PayPal Payflow Pro vault payments */
  payflowpro_cc_vault?: Maybe<VaultTokenInput>;
  /** Required input for Express Checkout and Payments Standard payments */
  paypal_express?: Maybe<PaypalExpressInput>;
  /** Purchase order number */
  purchase_order_number?: Maybe<Scalars['String']>;
}

/** The stored payment method available to the customer */
export interface PaymentToken {
  /** Stored account details */
  details?: Maybe<Scalars['String']>;
  /** The payment method code associated with the token */
  payment_method_code: Scalars['String'];
  /** The public hash of the token */
  public_hash: Scalars['String'];
  type: PaymentTokenTypeEnum;
}

/** The list of available payment token types */
export enum PaymentTokenTypeEnum {
  Account = 'account',
  Card = 'card'
}

/** Required input for Express Checkout and Payments Standard payments */
export interface PaypalExpressInput {
  /** The unique ID of the PayPal user */
  payer_id: Scalars['String'];
  /** The token returned by the createPaypalExpressToken mutation */
  token: Scalars['String'];
}

/** Deprecated: use type `PaypalExpressTokenOutput` instead */
export interface PaypalExpressToken {
  /**
   * A set of URLs that allow the buyer to authorize payment and adjust checkout details
   * @deprecated Use field `paypal_urls` of type `PaypalExpressTokenOutput` instead
   */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /**
   * The token returned by PayPal
   * @deprecated Use field `token` of type `PaypalExpressTokenOutput` instead
   */
  token?: Maybe<Scalars['String']>;
}

/** Defines the attributes required to receive a payment token for Express Checkout and Payments Standard payment methods. */
export interface PaypalExpressTokenInput {
  /** The unique ID that identifies the customer's cart */
  cart_id: Scalars['String'];
  /** Payment method code */
  code: Scalars['String'];
  /** Indicates whether the buyer selected the quick checkout button. The default value is false */
  express_button?: Maybe<Scalars['Boolean']>;
  /** A set of relative URLs that PayPal uses in response to various actions during the authorization process */
  urls: PaypalExpressUrlsInput;
  /** Indicates whether the buyer clicked the PayPal credit button. The default value is false */
  use_paypal_credit?: Maybe<Scalars['Boolean']>;
}

/** Contains the token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details. Applies to Express Checkout and Payments Standard payment methods. */
export interface PaypalExpressTokenOutput {
  /** A set of URLs that allow the buyer to authorize payment and adjust checkout details */
  paypal_urls?: Maybe<PaypalExpressUrlList>;
  /** The token returned by PayPal */
  token?: Maybe<Scalars['String']>;
}

/** A set of URLs that allow the buyer to authorize payment and adjust checkout details for Express Checkout and Payments Standard transactions. */
export interface PaypalExpressUrlList {
  /** The PayPal URL that allows the buyer to edit their checkout details */
  edit?: Maybe<Scalars['String']>;
  /** The URL to the PayPal login page */
  start?: Maybe<Scalars['String']>;
}

/** A set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is https://www.example.com/path/to/page.html, the relative URL is path/to/page.html. Use this input for Express Checkout and Payments Standard payment methods. */
export interface PaypalExpressUrlsInput {
  /** The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is https://www.example.com/paypal/action/cancel.html, the relative URL is paypal/action/cancel.html. */
  cancel_url: Scalars['String'];
  /** The relative URL of the page that PayPal will redirect to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success_pending.html, the relative URL is paypal/action/success_pending.html.  */
  pending_url?: Maybe<Scalars['String']>;
  /** The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL to this page is https://www.example.com/paypal/action/return.html, the relative URL is paypal/action/return.html. */
  return_url: Scalars['String'];
  /** The relative URL of the order confirmation page that PayPal will redirect to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is https://www.example.com/paypal/action/success.html, the relative URL is paypal/action/success.html. */
  success_url?: Maybe<Scalars['String']>;
}

/** PhysicalProductInterface contains attributes specific to tangible products. */
export interface PhysicalProductInterface {
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
}

/** Defines Pickup Location information. */
export interface PickupLocation {
  city?: Maybe<Scalars['String']>;
  contact_name?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pickup_location_code?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
}

/** PickupLocationFilterInput defines the list of attributes and filters for the search. */
export interface PickupLocationFilterInput {
  /** Filter by city. */
  city?: Maybe<FilterTypeInput>;
  /** Filter by country. */
  country_id?: Maybe<FilterTypeInput>;
  /** Filter by pickup location name. */
  name?: Maybe<FilterTypeInput>;
  /** Filter by pickup location code. */
  pickup_location_code?: Maybe<FilterTypeInput>;
  /** Filter by postcode. */
  postcode?: Maybe<FilterTypeInput>;
  /** Filter by region. */
  region?: Maybe<FilterTypeInput>;
  /** Filter by region id. */
  region_id?: Maybe<FilterTypeInput>;
  /** Filter by street. */
  street?: Maybe<FilterTypeInput>;
}

/** PickupLocationSortInput specifies attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export interface PickupLocationSortInput {
  /** City where pickup location is placed. */
  city?: Maybe<SortEnum>;
  /** Name of the contact person. */
  contact_name?: Maybe<SortEnum>;
  /** Id of the country in two letters. */
  country_id?: Maybe<SortEnum>;
  /** Description of the pickup location. */
  description?: Maybe<SortEnum>;
  /** Distance to the address, requested by distance filter. Applicable only with distance filter. If distance sort order is present, all other sort orders will be ignored. */
  distance?: Maybe<SortEnum>;
  /** Contact email of the pickup location. */
  email?: Maybe<SortEnum>;
  /** Contact fax of the pickup location. */
  fax?: Maybe<SortEnum>;
  /** Geographic latitude where pickup location is placed. */
  latitude?: Maybe<SortEnum>;
  /** Geographic longitude where pickup location is placed. */
  longitude?: Maybe<SortEnum>;
  /** The pickup location name. Customer use this to identify the pickup location. */
  name?: Maybe<SortEnum>;
  /** Contact phone number of the pickup location. */
  phone?: Maybe<SortEnum>;
  /** A code assigned to pickup location to identify the source. */
  pickup_location_code?: Maybe<SortEnum>;
  /** Postcode where pickup location is placed. */
  postcode?: Maybe<SortEnum>;
  /** Name of the region. */
  region?: Maybe<SortEnum>;
  /** Id of the region. */
  region_id?: Maybe<SortEnum>;
  /** Street where pickup location is placed. */
  street?: Maybe<SortEnum>;
}

/** Top level object returned in a pickup locations search. */
export interface PickupLocations {
  /** An array of pickup locations that match the specific search request. */
  items?: Maybe<Array<Maybe<PickupLocation>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** The number of products returned. */
  total_count?: Maybe<Scalars['Int']>;
}

export interface PlaceOrderInput {
  cart_id: Scalars['String'];
}

export interface PlaceOrderOutput {
  order: Order;
}

/** Price is deprecated, replaced by ProductPrice. The Price object defines the price of a product as well as any tax-related adjustments. */
export interface Price {
  /**
   * An array that provides information about tax, weee, or weee_tax adjustments.
   * @deprecated Price is deprecated, use ProductPrice.
   */
  adjustments?: Maybe<Array<Maybe<PriceAdjustment>>>;
  /**
   * The price of a product plus a three-letter currency code.
   * @deprecated Price is deprecated, use ProductPrice.
   */
  amount?: Maybe<Money>;
}

/** PriceAdjustment is deprecated. Taxes will be included or excluded in the price. The PricedAdjustment object defines the amount of money to apply as an adjustment, the type of adjustment to apply, and whether the item is included or excluded from the adjustment. */
export interface PriceAdjustment {
  /** The amount of the price adjustment and its currency code. */
  amount?: Maybe<Money>;
  /**
   * Indicates whether the adjustment involves tax, weee, or weee_tax.
   * @deprecated PriceAdjustment is deprecated.
   */
  code?: Maybe<PriceAdjustmentCodesEnum>;
  /**
   * Indicates whether the entity described by the code attribute is included or excluded from the adjustment.
   * @deprecated PriceAdjustment is deprecated.
   */
  description?: Maybe<PriceAdjustmentDescriptionEnum>;
}

/** PriceAdjustment.code is deprecated. This enumeration contains values defined in modules other than the Catalog module. */
export enum PriceAdjustmentCodesEnum {
  Tax = 'TAX',
  Weee = 'WEEE',
  WeeeTax = 'WEEE_TAX'
}

/** PriceAdjustmentDescriptionEnum is deprecated. This enumeration states whether a price adjustment is included or excluded. */
export enum PriceAdjustmentDescriptionEnum {
  Excluded = 'EXCLUDED',
  Included = 'INCLUDED'
}

/** Price range for a product. If the product has a single price, the minimum and maximum price will be the same. */
export interface PriceRange {
  /** The highest possible price for the product. */
  maximum_price?: Maybe<ProductPrice>;
  /** The lowest possible price for the product. */
  minimum_price: ProductPrice;
}

/** This enumeration the price type. */
export enum PriceTypeEnum {
  Dynamic = 'DYNAMIC',
  Fixed = 'FIXED',
  Percent = 'PERCENT'
}

/** This enumeration defines whether a bundle product's price is displayed as the lowest possible value or as a range. */
export enum PriceViewEnum {
  AsLowAs = 'AS_LOW_AS',
  PriceRange = 'PRICE_RANGE'
}

export interface ProductAttribute {
  /** The unique identifier for a product attribute code. */
  code: Scalars['String'];
  /** The display value of the attribute */
  value: Scalars['String'];
}

/** ProductAttributeFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export interface ProductAttributeFilterInput {
  /** Attribute label: Activity */
  activity?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Category Gear */
  category_gear?: Maybe<FilterEqualTypeInput>;
  /** Deprecated: use `category_uid` to filter product by category id. */
  category_id?: Maybe<FilterEqualTypeInput>;
  /** Filter product by the unique ID for a `CategoryInterface` object. */
  category_uid?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Climate */
  climate?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Collar */
  collar?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Color */
  color?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Description */
  description?: Maybe<FilterMatchTypeInput>;
  /** Attribute label: Eco Collection */
  eco_collection?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Erin Recommends */
  erin_recommends?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Features */
  features_bags?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Format */
  format?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Gender */
  gender?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Material */
  material?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Product Name */
  name?: Maybe<FilterMatchTypeInput>;
  /** Attribute label: New */
  new?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Pattern */
  pattern?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Performance Fabric */
  performance_fabric?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Price */
  price?: Maybe<FilterRangeTypeInput>;
  /** Attribute label: Sale */
  sale?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Short Description */
  short_description?: Maybe<FilterMatchTypeInput>;
  /** Attribute label: Size */
  size?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: SKU */
  sku?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Sleeve */
  sleeve?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Strap/Handle */
  strap_bags?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Style Bags */
  style_bags?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Style Bottom */
  style_bottom?: Maybe<FilterEqualTypeInput>;
  /** Attribute label: Style General */
  style_general?: Maybe<FilterEqualTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<FilterEqualTypeInput>;
}

/** ProductAttributeSortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. It's possible to sort products using searchable attributes with enabled 'Use in Filter Options' option */
export interface ProductAttributeSortInput {
  /** Attribute label: Product Name */
  name?: Maybe<SortEnum>;
  /** Sort by the position assigned to each product. */
  position?: Maybe<SortEnum>;
  /** Attribute label: Price */
  price?: Maybe<SortEnum>;
  /** Sort by the search relevance score (default). */
  relevance?: Maybe<SortEnum>;
}

/** A discount applied to a product price. */
export interface ProductDiscount {
  /** The actual value of the discount. */
  amount_off?: Maybe<Scalars['Float']>;
  /** The discount expressed a percentage. */
  percent_off?: Maybe<Scalars['Float']>;
}

/** ProductFilterInput is deprecated, use @ProductAttributeFilterInput instead. ProductFilterInput defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. */
export interface ProductFilterInput {
  /** Category ID the product belongs to. */
  category_id?: Maybe<FilterTypeInput>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<FilterTypeInput>;
  /** Timestamp indicating when the product was created. */
  created_at?: Maybe<FilterTypeInput>;
  /** The name of a custom layout. */
  custom_layout?: Maybe<FilterTypeInput>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: Maybe<FilterTypeInput>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<FilterTypeInput>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<FilterTypeInput>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: Maybe<FilterTypeInput>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<FilterTypeInput>;
  /** The label assigned to a product image. */
  image_label?: Maybe<FilterTypeInput>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<FilterTypeInput>;
  /** The numeric maximal price of the product. Do not include the currency code. */
  max_price?: Maybe<FilterTypeInput>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<FilterTypeInput>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<FilterTypeInput>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<FilterTypeInput>;
  /** The numeric minimal price of the product. Do not include the currency code. */
  min_price?: Maybe<FilterTypeInput>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<FilterTypeInput>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: Maybe<FilterTypeInput>;
  /** The end date for new product listings. */
  news_to_date?: Maybe<FilterTypeInput>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<FilterTypeInput>;
  /** The keyword required to perform a logical OR comparison. */
  or?: Maybe<ProductFilterInput>;
  /** The price of an item. */
  price?: Maybe<FilterTypeInput>;
  /** Indicates whether the product has required options. */
  required_options?: Maybe<FilterTypeInput>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<FilterTypeInput>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<FilterTypeInput>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<FilterTypeInput>;
  /** The label assigned to a product's small image. */
  small_image_label?: Maybe<FilterTypeInput>;
  /** The beginning date that a product has a special price. */
  special_from_date?: Maybe<FilterTypeInput>;
  /** The discounted price of the product. Do not include the currency code. */
  special_price?: Maybe<FilterTypeInput>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<FilterTypeInput>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<FilterTypeInput>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<FilterTypeInput>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: Maybe<FilterTypeInput>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: Maybe<FilterTypeInput>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: Maybe<FilterTypeInput>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<FilterTypeInput>;
  url_path?: Maybe<FilterTypeInput>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<FilterTypeInput>;
}

/** Product image information. Contains the image URL and label. */
export interface ProductImage extends MediaGalleryInterface {
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
}

/** Product Information used for Pickup Locations search. */
export interface ProductInfoInput {
  /** Product SKU. */
  sku: Scalars['String'];
}

/** The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes. */
export interface ProductInterface {
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
}


/** The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes. */
export interface ProductInterfaceReviewsArgs {
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}

/** ProductLinks is an implementation of ProductLinksInterface. */
export interface ProductLinks extends ProductLinksInterface {
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']>;
}

/** ProductLinks contains information about linked products, including the link type and product type of each item. */
export interface ProductLinksInterface {
  /** One of related, associated, upsell, or crosssell. */
  link_type?: Maybe<Scalars['String']>;
  /** The SKU of the linked product. */
  linked_product_sku?: Maybe<Scalars['String']>;
  /** The type of linked product (simple, virtual, bundle, downloadable, grouped, configurable). */
  linked_product_type?: Maybe<Scalars['String']>;
  /** The position within the list of product links. */
  position?: Maybe<Scalars['Int']>;
  /** The identifier of the linked product. */
  sku?: Maybe<Scalars['String']>;
}

/** ProductMediaGalleryEntriesContent contains an image in base64 format and basic information about the image. */
export interface ProductMediaGalleryEntriesContent {
  /** The image in base64 format. */
  base64_encoded_data?: Maybe<Scalars['String']>;
  /** The file name of the image. */
  name?: Maybe<Scalars['String']>;
  /** The MIME type of the file, such as image/png. */
  type?: Maybe<Scalars['String']>;
}

/** ProductMediaGalleryEntriesVideoContent contains a link to a video file and basic information about the video. */
export interface ProductMediaGalleryEntriesVideoContent {
  /** Must be external-video. */
  media_type?: Maybe<Scalars['String']>;
  /** A description of the video. */
  video_description?: Maybe<Scalars['String']>;
  /** Optional data about the video. */
  video_metadata?: Maybe<Scalars['String']>;
  /** Describes the video source. */
  video_provider?: Maybe<Scalars['String']>;
  /** The title of the video. */
  video_title?: Maybe<Scalars['String']>;
  /** The URL to the video. */
  video_url?: Maybe<Scalars['String']>;
}

/** Represents a product price. */
export interface ProductPrice {
  /** The price discount. Represents the difference between the regular and final price. */
  discount?: Maybe<ProductDiscount>;
  /** The final price of the product after discounts applied. */
  final_price: Money;
  /** The multiple FPTs that can be applied to a product price. */
  fixed_product_taxes?: Maybe<Array<Maybe<FixedProductTax>>>;
  /** The regular price of the product. */
  regular_price: Money;
}

/** ProductPrices is deprecated, replaced by PriceRange. The ProductPrices object contains the regular price of an item, as well as its minimum and maximum prices. Only composite products, which include bundle, configurable, and grouped products, can contain a minimum and maximum price. */
export interface ProductPrices {
  /**
   * The highest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the to value.
   * @deprecated Use PriceRange.maximum_price.
   */
  maximalPrice?: Maybe<Price>;
  /**
   * The lowest possible final price for all the options defined within a composite product. If you are specifying a price range, this would be the from value.
   * @deprecated Use PriceRange.minimum_price.
   */
  minimalPrice?: Maybe<Price>;
  /**
   * The base price of a product.
   * @deprecated Use regular_price from PriceRange.minimum_price or PriceRange.maximum_price.
   */
  regularPrice?: Maybe<Price>;
}

/** Details of a product review */
export interface ProductReview {
  /** The average rating for product review. */
  average_rating: Scalars['Float'];
  /** Date indicating when the review was created. */
  created_at: Scalars['String'];
  /** The customer's nickname. Defaults to the customer name, if logged in */
  nickname: Scalars['String'];
  /** Contains details about the reviewed product */
  product: ProductInterface;
  /** An array of ratings by rating category, such as quality, price, and value */
  ratings_breakdown: Array<Maybe<ProductReviewRating>>;
  /** The summary (title) of the review */
  summary: Scalars['String'];
  /** The review text. */
  text: Scalars['String'];
}

export interface ProductReviewRating {
  /** The label assigned to an aspect of a product that is being rated, such as quality or price */
  name: Scalars['String'];
  /** The rating value given by customer. By default, possible values range from 1 to 5. */
  value: Scalars['String'];
}

export interface ProductReviewRatingInput {
  /** An encoded rating ID. */
  id: Scalars['String'];
  /** An encoded rating value id. */
  value_id: Scalars['String'];
}

export interface ProductReviewRatingMetadata {
  /** An encoded rating ID. */
  id: Scalars['String'];
  /** The label assigned to an aspect of a product that is being rated, such as quality or price */
  name: Scalars['String'];
  /** List of product review ratings sorted by position. */
  values: Array<Maybe<ProductReviewRatingValueMetadata>>;
}

export interface ProductReviewRatingValueMetadata {
  /** A ratings scale, such as the number of stars awarded */
  value: Scalars['String'];
  /** An encoded rating value id. */
  value_id: Scalars['String'];
}

export interface ProductReviewRatingsMetadata {
  /** List of product reviews sorted by position */
  items: Array<Maybe<ProductReviewRatingMetadata>>;
}

export interface ProductReviews {
  /** An array of product reviews. */
  items: Array<Maybe<ProductReview>>;
  /** Metadata for pagination rendering. */
  page_info: SearchResultPageInfo;
}

/** ProductSortInput is deprecated, use @ProductAttributeSortInput instead. ProductSortInput specifies the attribute to use for sorting search results and indicates whether the results are sorted in ascending or descending order. */
export interface ProductSortInput {
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<SortEnum>;
  /** Timestamp indicating when the product was created. */
  created_at?: Maybe<SortEnum>;
  /** The name of a custom layout. */
  custom_layout?: Maybe<SortEnum>;
  /** XML code that is applied as a layout update to the product page. */
  custom_layout_update?: Maybe<SortEnum>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<SortEnum>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<SortEnum>;
  /** Indicates whether additional attributes have been created for the product. */
  has_options?: Maybe<SortEnum>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<SortEnum>;
  /** The label assigned to a product image. */
  image_label?: Maybe<SortEnum>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<SortEnum>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<SortEnum>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<SortEnum>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<SortEnum>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<SortEnum>;
  /** The beginning date for new product listings, and determines if the product is featured as a new product. */
  news_from_date?: Maybe<SortEnum>;
  /** The end date for new product listings. */
  news_to_date?: Maybe<SortEnum>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<SortEnum>;
  /** The price of the item. */
  price?: Maybe<SortEnum>;
  /** Indicates whether the product has required options. */
  required_options?: Maybe<SortEnum>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<SortEnum>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<SortEnum>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<SortEnum>;
  /** The label assigned to a product's small image. */
  small_image_label?: Maybe<SortEnum>;
  /** The beginning date that a product has a special price. */
  special_from_date?: Maybe<SortEnum>;
  /** The discounted price of the product. */
  special_price?: Maybe<SortEnum>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<SortEnum>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<SortEnum>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<SortEnum>;
  /** The label assigned to a product's thumbnail image. */
  thumbnail_label?: Maybe<SortEnum>;
  /** The price when tier pricing is in effect and the items purchased threshold has been reached. */
  tier_price?: Maybe<SortEnum>;
  /** Timestamp indicating when the product was updated. */
  updated_at?: Maybe<SortEnum>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<SortEnum>;
  url_path?: Maybe<SortEnum>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<SortEnum>;
}

/** This enumeration states whether a product stock status is in stock or out of stock */
export enum ProductStockStatus {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK'
}

/** ProductTierPrices is deprecated and has been replaced by TierPrice. The ProductTierPrices object defines a tier price, which is a quantity discount offered to a specific customer group. */
export interface ProductTierPrices {
  /**
   * The ID of the customer group.
   * @deprecated customer_group_id is not relevant for storefront.
   */
  customer_group_id?: Maybe<Scalars['String']>;
  /**
   * The percentage discount of the item.
   * @deprecated ProductTierPrices is deprecated. Use TierPrice.discount.
   */
  percentage_value?: Maybe<Scalars['Float']>;
  /**
   * The number of items that must be purchased to qualify for tier pricing.
   * @deprecated ProductTierPrices is deprecated, use TierPrice.quantity.
   */
  qty?: Maybe<Scalars['Float']>;
  /**
   * The price of the fixed price item.
   * @deprecated ProductTierPrices is deprecated. Use TierPrice.final_price
   */
  value?: Maybe<Scalars['Float']>;
  /**
   * The ID assigned to the website.
   * @deprecated website_id is not relevant for storefront.
   */
  website_id?: Maybe<Scalars['Float']>;
}

/** Contains information about a product video. */
export interface ProductVideo extends MediaGalleryInterface {
  /** Whether the image is hidden from view. */
  disabled?: Maybe<Scalars['Boolean']>;
  /** The label of the product image or video. */
  label?: Maybe<Scalars['String']>;
  /** The media item's position after it has been sorted. */
  position?: Maybe<Scalars['Int']>;
  /** The URL of the product image or video. */
  url?: Maybe<Scalars['String']>;
  /** Contains a ProductMediaGalleryEntriesVideoContent object. */
  video_content?: Maybe<ProductMediaGalleryEntriesVideoContent>;
}

/** The Products object is the top-level object returned in a product search. */
export interface Products {
  /** Layered navigation aggregations. */
  aggregations?: Maybe<Array<Maybe<Aggregation>>>;
  /**
   * Layered navigation filters array.
   * @deprecated Use aggregations instead
   */
  filters?: Maybe<Array<Maybe<LayerFilter>>>;
  /** An array of products that match the specified search criteria. */
  items?: Maybe<Array<Maybe<ProductInterface>>>;
  /** An object that includes the page_info and currentPage values specified in the query. */
  page_info?: Maybe<SearchResultPageInfo>;
  /** An object that includes the default sort field and all available sort fields. */
  sort_fields?: Maybe<SortFields>;
  /** The number of products that are marked as visible. By default, in complex products, parent products are visible, but their child products are not. */
  total_count?: Maybe<Scalars['Int']>;
}

export interface Query {
  /** Get a list of available store views and their config information. */
  availableStores?: Maybe<Array<Maybe<StoreConfig>>>;
  /** Returns information about shopping cart */
  cart?: Maybe<Cart>;
  categories?: Maybe<CategoryResult>;
  /**
   * The category query searches for categories that match the criteria specified in the search and filter attributes.
   * @deprecated Use 'categoryList' query instead of 'category' query
   */
  category?: Maybe<CategoryTree>;
  /** Returns an array of categories based on the specified filters. */
  categoryList?: Maybe<Array<Maybe<CategoryTree>>>;
  /** The Checkout Agreements information */
  checkoutAgreements?: Maybe<Array<Maybe<CheckoutAgreement>>>;
  /** The CMS block query returns information about CMS blocks */
  cmsBlocks?: Maybe<CmsBlocks>;
  /** The CMS page query returns information about a CMS page */
  cmsPage?: Maybe<CmsPage>;
  /** Return products that have been added to the specified compare list */
  compareList?: Maybe<CompareList>;
  /** The countries query provides information for all countries. */
  countries?: Maybe<Array<Maybe<Country>>>;
  /** The countries query provides information for a single country. */
  country?: Maybe<Country>;
  /** The currency query returns information about store currency. */
  currency?: Maybe<Currency>;
  /** The customAttributeMetadata query returns the attribute type, given an attribute code and entity type */
  customAttributeMetadata?: Maybe<CustomAttributeMetadata>;
  /** The customer query returns information about a customer account */
  customer?: Maybe<Customer>;
  /** Returns information about the customer shopping cart */
  customerCart: Cart;
  /** The query returns the contents of a customer's downloadable products */
  customerDownloadableProducts?: Maybe<CustomerDownloadableProducts>;
  /** @deprecated Use orders from customer instead */
  customerOrders?: Maybe<CustomerOrders>;
  /** Return a list of customer payment tokens */
  customerPaymentTokens?: Maybe<CustomerPaymentTokens>;
  /** Retrieve secure PayPal url for Payments Pro Hosted Solution transaction. */
  getHostedProUrl?: Maybe<HostedProUrl>;
  /** Retrieve payment credentials for transaction. Use this query for Payflow Link and Payments Advanced payment methods. */
  getPayflowLinkToken?: Maybe<PayflowLinkToken>;
  isEmailAvailable?: Maybe<IsEmailAvailableOutput>;
  /** The pickup locations query searches for locations that match the search request requirements. */
  pickupLocations?: Maybe<PickupLocations>;
  /** Retrieves metadata required by clients to render the Reviews section. */
  productReviewRatingsMetadata: ProductReviewRatingsMetadata;
  /** The products query searches for products that match the criteria specified in the search and filter attributes. */
  products?: Maybe<Products>;
  /** The store config query */
  storeConfig?: Maybe<StoreConfig>;
  /** The urlResolver query returns the relative URL for a specified product, category or CMS page, using as input a url_key appended by the url_suffix, if one exists */
  urlResolver?: Maybe<EntityUrl>;
  /**
   * The wishlist query returns the contents of a customer's wish list
   * @deprecated Moved under `Customer` `wishlist`
   */
  wishlist?: Maybe<WishlistOutput>;
}


export interface QueryAvailableStoresArgs {
  useCurrentGroup?: Maybe<Scalars['Boolean']>;
}


export interface QueryCartArgs {
  cart_id: Scalars['String'];
}


export interface QueryCategoriesArgs {
  currentPage?: Maybe<Scalars['Int']>;
  filters?: Maybe<CategoryFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
}


export interface QueryCategoryArgs {
  id?: Maybe<Scalars['Int']>;
}


export interface QueryCategoryListArgs {
  filters?: Maybe<CategoryFilterInput>;
}


export interface QueryCmsBlocksArgs {
  identifiers?: Maybe<Array<Maybe<Scalars['String']>>>;
}


export interface QueryCmsPageArgs {
  id?: Maybe<Scalars['Int']>;
  identifier?: Maybe<Scalars['String']>;
}


export interface QueryCompareListArgs {
  uid: Scalars['ID'];
}


export interface QueryCountryArgs {
  id?: Maybe<Scalars['String']>;
}


export interface QueryCustomAttributeMetadataArgs {
  attributes: Array<AttributeInput>;
}


export interface QueryGetHostedProUrlArgs {
  input: HostedProUrlInput;
}


export interface QueryGetPayflowLinkTokenArgs {
  input: PayflowLinkTokenInput;
}


export interface QueryIsEmailAvailableArgs {
  email: Scalars['String'];
}


export interface QueryPickupLocationsArgs {
  area?: Maybe<AreaInput>;
  currentPage?: Maybe<Scalars['Int']>;
  filters?: Maybe<PickupLocationFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  productsInfo?: Maybe<Array<Maybe<ProductInfoInput>>>;
  sort?: Maybe<PickupLocationSortInput>;
}


export interface QueryProductsArgs {
  currentPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<ProductAttributeFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<ProductAttributeSortInput>;
}


export interface QueryUrlResolverArgs {
  url: Scalars['String'];
}

export interface Region {
  code?: Maybe<Scalars['String']>;
  /** The unique ID for a `Region` object. */
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}

export interface RemoveCouponFromCartInput {
  cart_id: Scalars['String'];
}

export interface RemoveCouponFromCartOutput {
  cart?: Maybe<Cart>;
}

export interface RemoveItemFromCartInput {
  cart_id: Scalars['String'];
  /** Deprecated. Use `cart_item_uid` instead. */
  cart_item_id?: Maybe<Scalars['Int']>;
  /** Required field. The unique ID for a `CartItemInterface` object */
  cart_item_uid?: Maybe<Scalars['ID']>;
}

export interface RemoveItemFromCartOutput {
  cart: Cart;
}

export interface RemoveProductsFromCompareListInput {
  /** An array of product IDs to remove from the compare list */
  products: Array<Maybe<Scalars['ID']>>;
  /** The unique identifier of the compare list to modify */
  uid: Scalars['ID'];
}

/** Contains the customer's wish list and any errors encountered */
export interface RemoveProductsFromWishlistOutput {
  /** An array of errors encountered while deleting products from a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with after items were successfully deleted */
  wishlist: Wishlist;
}

export interface ReorderItemsOutput {
  /** Contains detailed information about the customer's cart. */
  cart: Cart;
  /** An array of reordering errors. */
  userInputErrors: Array<Maybe<CheckoutUserInputError>>;
}

export interface RevokeCustomerTokenOutput {
  result: Scalars['Boolean'];
}

/** Comment item details */
export interface SalesCommentItem {
  /** The text of the message */
  message: Scalars['String'];
  /** The timestamp of the comment */
  timestamp: Scalars['String'];
}

export interface SalesItemInterface {
  /** The entered gift message for the order item */
  gift_message?: Maybe<GiftMessage>;
}

/** SearchResultPageInfo provides navigation for the query response */
export interface SearchResultPageInfo {
  /** Specifies which page of results to return */
  current_page?: Maybe<Scalars['Int']>;
  /** Specifies the maximum number of items to return */
  page_size?: Maybe<Scalars['Int']>;
  /** Total pages */
  total_pages?: Maybe<Scalars['Int']>;
}

export interface SelectedBundleOption {
  /** @deprecated Use `uid` instead */
  id: Scalars['Int'];
  label: Scalars['String'];
  type: Scalars['String'];
  /** The unique ID for a `SelectedBundleOption` object */
  uid: Scalars['ID'];
  values: Array<Maybe<SelectedBundleOptionValue>>;
}

export interface SelectedBundleOptionValue {
  /** Use `uid` instead */
  id: Scalars['Int'];
  label: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  /** The unique ID for a `SelectedBundleOptionValue` object */
  uid: Scalars['ID'];
}

export interface SelectedConfigurableOption {
  /** The unique ID for a `ConfigurableProductOptions` object */
  configurable_product_option_uid: Scalars['ID'];
  /** The unique ID for a `ConfigurableProductOptionsValues` object */
  configurable_product_option_value_uid: Scalars['ID'];
  /** @deprecated Use SelectedConfigurableOption.configurable_product_option_uid instead */
  id: Scalars['Int'];
  option_label: Scalars['String'];
  /** @deprecated Use SelectedConfigurableOption.configurable_product_option_value_uid instead */
  value_id: Scalars['Int'];
  value_label: Scalars['String'];
}

export interface SelectedCustomizableOption {
  /** The unique ID for a `CustomizableRadioOption`, `CustomizableDropDownOption`, `CustomizableMultipleOption`, etc. of `CustomizableOptionInterface` objects */
  customizable_option_uid: Scalars['ID'];
  /** @deprecated Use SelectedCustomizableOption.customizable_option_uid instead */
  id: Scalars['Int'];
  is_required: Scalars['Boolean'];
  label: Scalars['String'];
  sort_order: Scalars['Int'];
  type: Scalars['String'];
  values: Array<Maybe<SelectedCustomizableOptionValue>>;
}

export interface SelectedCustomizableOptionValue {
  /** The unique ID for a `CustomizableMultipleValue`, `CustomizableRadioValue`, `CustomizableCheckboxValue`, `CustomizableDropDownValue`, etc. objects */
  customizable_option_value_uid: Scalars['ID'];
  /** @deprecated Use SelectedCustomizableOptionValue.customizable_option_value_uid instead */
  id: Scalars['Int'];
  label: Scalars['String'];
  price: CartItemSelectedOptionValuePrice;
  value: Scalars['String'];
}

export interface SelectedPaymentMethod {
  /** The payment method code */
  code: Scalars['String'];
  /** The purchase order number. */
  purchase_order_number?: Maybe<Scalars['String']>;
  /** The payment method title. */
  title: Scalars['String'];
}

export interface SelectedShippingMethod {
  amount: Money;
  /** @deprecated The field should not be used on the storefront */
  base_amount?: Maybe<Money>;
  carrier_code: Scalars['String'];
  carrier_title: Scalars['String'];
  method_code: Scalars['String'];
  method_title: Scalars['String'];
}

export interface SendEmailToFriendInput {
  product_id: Scalars['Int'];
  recipients: Array<Maybe<SendEmailToFriendRecipientInput>>;
  sender: SendEmailToFriendSenderInput;
}

export interface SendEmailToFriendOutput {
  recipients?: Maybe<Array<Maybe<SendEmailToFriendRecipient>>>;
  sender?: Maybe<SendEmailToFriendSender>;
}

export interface SendEmailToFriendRecipient {
  email: Scalars['String'];
  name: Scalars['String'];
}

export interface SendEmailToFriendRecipientInput {
  email: Scalars['String'];
  name: Scalars['String'];
}

export interface SendEmailToFriendSender {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
}

export interface SendEmailToFriendSenderInput {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
}

export interface SendFriendConfiguration {
  /** Indicates whether the Email to a Friend feature is enabled. */
  enabled_for_customers: Scalars['Boolean'];
  /** Indicates whether the Email to a Friend feature is enabled for guests. */
  enabled_for_guests: Scalars['Boolean'];
}

export interface SetBillingAddressOnCartInput {
  billing_address: BillingAddressInput;
  cart_id: Scalars['String'];
}

export interface SetBillingAddressOnCartOutput {
  cart: Cart;
}

export interface SetGuestEmailOnCartInput {
  cart_id: Scalars['String'];
  email: Scalars['String'];
}

export interface SetGuestEmailOnCartOutput {
  cart: Cart;
}

export interface SetPaymentMethodAndPlaceOrderInput {
  cart_id: Scalars['String'];
  payment_method: PaymentMethodInput;
}

export interface SetPaymentMethodOnCartInput {
  cart_id: Scalars['String'];
  payment_method: PaymentMethodInput;
}

export interface SetPaymentMethodOnCartOutput {
  cart: Cart;
}

export interface SetShippingAddressesOnCartInput {
  cart_id: Scalars['String'];
  shipping_addresses: Array<Maybe<ShippingAddressInput>>;
}

export interface SetShippingAddressesOnCartOutput {
  cart: Cart;
}

export interface SetShippingMethodsOnCartInput {
  cart_id: Scalars['String'];
  shipping_methods: Array<Maybe<ShippingMethodInput>>;
}

export interface SetShippingMethodsOnCartOutput {
  cart: Cart;
}

/** This enumeration defines whether bundle items must be shipped together. */
export enum ShipBundleItemsEnum {
  Separately = 'SEPARATELY',
  Together = 'TOGETHER'
}

export interface ShipmentItem extends ShipmentItemInterface {
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
}

/** Order shipment item details */
export interface ShipmentItemInterface {
  /** The unique ID for a `ShipmentItemInterface` object */
  id: Scalars['ID'];
  /** Associated order item */
  order_item?: Maybe<OrderItemInterface>;
  /** Name of the base product */
  product_name?: Maybe<Scalars['String']>;
  /** Sale price for the base product */
  product_sale_price: Money;
  /** SKU of the base product */
  product_sku: Scalars['String'];
  /** Number of shipped items */
  quantity_shipped: Scalars['Float'];
}

/** Order shipment tracking details */
export interface ShipmentTracking {
  /** The shipping carrier for the order delivery */
  carrier: Scalars['String'];
  /** The tracking number of the order shipment */
  number?: Maybe<Scalars['String']>;
  /** The shipment tracking title */
  title: Scalars['String'];
}

export interface ShippingAddressInput {
  address?: Maybe<CartAddressInput>;
  customer_address_id?: Maybe<Scalars['Int']>;
  customer_notes?: Maybe<Scalars['String']>;
  /** The code of Pickup Location which will be used for In-Store Pickup. */
  pickup_location_code?: Maybe<Scalars['String']>;
}

export interface ShippingCartAddress extends CartAddressInterface {
  available_shipping_methods?: Maybe<Array<Maybe<AvailableShippingMethod>>>;
  /** @deprecated `cart_items_v2` should be used instead */
  cart_items?: Maybe<Array<Maybe<CartItemQuantity>>>;
  cart_items_v2?: Maybe<Array<Maybe<CartItemInterface>>>;
  city: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  country: CartAddressCountry;
  customer_notes?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  /** @deprecated This information shoud not be exposed on frontend */
  items_weight?: Maybe<Scalars['Float']>;
  lastname: Scalars['String'];
  pickup_location_code?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<CartAddressRegion>;
  selected_shipping_method?: Maybe<SelectedShippingMethod>;
  street: Array<Maybe<Scalars['String']>>;
  telephone: Scalars['String'];
}

/** Defines an individual shipping discount. This discount can be applied to shipping. */
export interface ShippingDiscount {
  /** The amount of the discount */
  amount: Money;
}

/** The Shipping handling details */
export interface ShippingHandling {
  /** The shipping amount, excluding tax */
  amount_excluding_tax?: Maybe<Money>;
  /** The shipping amount, including tax */
  amount_including_tax?: Maybe<Money>;
  /** The applied discounts to the shipping */
  discounts?: Maybe<Array<Maybe<ShippingDiscount>>>;
  /** Contains details about taxes applied for shipping */
  taxes?: Maybe<Array<Maybe<TaxItem>>>;
  /** The total amount for shipping */
  total_amount: Money;
}

export interface ShippingMethodInput {
  carrier_code: Scalars['String'];
  method_code: Scalars['String'];
}

/** Simple Cart Item */
export interface SimpleCartItem extends CartItemInterface {
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The entered gift message for the cart item */
  gift_message?: Maybe<GiftMessage>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
}

/** A simple product is tangible and are usually sold as single units or in fixed quantities. */
export interface SimpleProduct extends CustomizableProductInterface, PhysicalProductInterface, ProductInterface {
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
  /** The weight of the item, in units defined by the store. */
  weight?: Maybe<Scalars['Float']>;
}


/** A simple product is tangible and are usually sold as single units or in fixed quantities. */
export interface SimpleProductReviewsArgs {
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}

export interface SimpleProductCartItemInput {
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
  data: CartItemInput;
}

/** A simple product wish list Item */
export interface SimpleWishlistItem extends WishlistItemInterface {
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
}

/** This enumeration indicates whether to return results in ascending or descending order */
export enum SortEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export interface SortField {
  /** Label of sort field. */
  label?: Maybe<Scalars['String']>;
  /** Attribute code of sort field. */
  value?: Maybe<Scalars['String']>;
}

/** SortFields contains a default value for sort fields and all available sort fields. */
export interface SortFields {
  /** Default value of sort fields. */
  default?: Maybe<Scalars['String']>;
  /** Available sort fields. */
  options?: Maybe<Array<Maybe<SortField>>>;
}

/** The type contains information about a store config */
export interface StoreConfig {
  /** Footer Miscellaneous HTML */
  absolute_footer?: Maybe<Scalars['String']>;
  /** Indicates whether guest users can write product reviews. Possible values: 1 (Yes) and 0 (No) */
  allow_guests_to_write_product_reviews?: Maybe<Scalars['String']>;
  /** The value of the Allow Gift Messages for Order Items option */
  allow_items?: Maybe<Scalars['String']>;
  /** The value of the Allow Gift Messages on Order Level option */
  allow_order?: Maybe<Scalars['String']>;
  /** Enable autocomplete on login and forgot password forms */
  autocomplete_on_storefront?: Maybe<Scalars['Boolean']>;
  /** Base currency code */
  base_currency_code?: Maybe<Scalars['String']>;
  /** Base link URL for the store */
  base_link_url?: Maybe<Scalars['String']>;
  /** Base media URL for the store */
  base_media_url?: Maybe<Scalars['String']>;
  /** Base static URL for the store */
  base_static_url?: Maybe<Scalars['String']>;
  /** Base URL for the store */
  base_url?: Maybe<Scalars['String']>;
  /** Braintree cc vault status. */
  braintree_cc_vault_active?: Maybe<Scalars['String']>;
  /** Default Sort By. */
  catalog_default_sort_by?: Maybe<Scalars['String']>;
  /** Corresponds to the 'Display Prices In Product Lists' field. It indicates how FPT information is displayed on category pages */
  category_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Category URL Suffix. */
  category_url_suffix?: Maybe<Scalars['String']>;
  /** CMS Home Page */
  cms_home_page?: Maybe<Scalars['String']>;
  /** CMS No Cookies Page */
  cms_no_cookies?: Maybe<Scalars['String']>;
  /** CMS No Route Page */
  cms_no_route?: Maybe<Scalars['String']>;
  /**
   * A code assigned to the store to identify it
   * @deprecated Use `store_code` instead.
   */
  code?: Maybe<Scalars['String']>;
  /** The configuration setting determines which thumbnail should be used in the cart for configurable products. */
  configurable_thumbnail_source?: Maybe<Scalars['String']>;
  /** Copyright */
  copyright?: Maybe<Scalars['String']>;
  /** Default Meta Description */
  default_description?: Maybe<Scalars['String']>;
  /** Default display currency code */
  default_display_currency_code?: Maybe<Scalars['String']>;
  /** Default Meta Keywords */
  default_keywords?: Maybe<Scalars['String']>;
  /** Default Page Title */
  default_title?: Maybe<Scalars['String']>;
  /** Display Demo Store Notice */
  demonotice?: Maybe<Scalars['Int']>;
  /** Default Web URL */
  front?: Maybe<Scalars['String']>;
  /** Products per Page on Grid Default Value. */
  grid_per_page?: Maybe<Scalars['Int']>;
  /** Products per Page on Grid Allowed Values. */
  grid_per_page_values?: Maybe<Scalars['String']>;
  /** Scripts and Style Sheets */
  head_includes?: Maybe<Scalars['String']>;
  /** Favicon Icon */
  head_shortcut_icon?: Maybe<Scalars['String']>;
  /** Logo Image */
  header_logo_src?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the store
   * @deprecated Use `store_code` instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** Indicates whether the store view has been designated as the default within the store group */
  is_default_store?: Maybe<Scalars['Boolean']>;
  /** Indicates whether the store group has been designated as the default within the website */
  is_default_store_group?: Maybe<Scalars['Boolean']>;
  /** List Mode. */
  list_mode?: Maybe<Scalars['String']>;
  /** Products per Page on List Default Value. */
  list_per_page?: Maybe<Scalars['Int']>;
  /** Products per Page on List Allowed Values. */
  list_per_page_values?: Maybe<Scalars['String']>;
  /** Store locale */
  locale?: Maybe<Scalars['String']>;
  /** Logo Image Alt */
  logo_alt?: Maybe<Scalars['String']>;
  /** Logo Attribute Height */
  logo_height?: Maybe<Scalars['Int']>;
  /** Logo Attribute Width */
  logo_width?: Maybe<Scalars['Int']>;
  /** Indicates whether wishlists are enabled (1) or disabled (0) */
  magento_wishlist_general_is_enabled?: Maybe<Scalars['String']>;
  /** The minimum number of characters required for a valid password. */
  minimum_password_length?: Maybe<Scalars['String']>;
  /** Default No-route URL */
  no_route?: Maybe<Scalars['String']>;
  /** Payflow Pro vault status. */
  payment_payflowpro_cc_vault_active?: Maybe<Scalars['String']>;
  /** Corresponds to the 'Display Prices On Product View Page' field. It indicates how FPT information is displayed on product pages */
  product_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Indicates whether product reviews are enabled. Possible values: 1 (Yes) and 0 (No) */
  product_reviews_enabled?: Maybe<Scalars['String']>;
  /** Product URL Suffix. */
  product_url_suffix?: Maybe<Scalars['String']>;
  /** The number of different character classes required in a password (lowercase, uppercase, digits, special characters). */
  required_character_classes_number?: Maybe<Scalars['String']>;
  /**
   * The ID of the root category
   * @deprecated Use `root_category_uid` instead
   */
  root_category_id?: Maybe<Scalars['Int']>;
  /** The unique ID for a `CategoryInterface` object. */
  root_category_uid?: Maybe<Scalars['ID']>;
  /** Corresponds to the 'Display Prices In Sales Modules' field. It indicates how FPT information is displayed on cart, checkout, and order pages */
  sales_fixed_product_tax_display_setting?: Maybe<FixedProductTaxDisplaySettings>;
  /** Secure base link URL for the store */
  secure_base_link_url?: Maybe<Scalars['String']>;
  /** Secure base media URL for the store */
  secure_base_media_url?: Maybe<Scalars['String']>;
  /** Secure base static URL for the store */
  secure_base_static_url?: Maybe<Scalars['String']>;
  /** Secure base URL for the store */
  secure_base_url?: Maybe<Scalars['String']>;
  /** Email to a Friend configuration. */
  send_friend?: Maybe<SendFriendConfiguration>;
  /** Show Breadcrumbs for CMS Pages */
  show_cms_breadcrumbs?: Maybe<Scalars['Int']>;
  /** The unique ID of the store view. In the Admin, this is called the Store View Code. When making a GraphQL call, assign this value to the `Store` header to provide the scope */
  store_code?: Maybe<Scalars['ID']>;
  /** The unique ID assigned to the store group. In the Admin, this is called the Store Name */
  store_group_code?: Maybe<Scalars['ID']>;
  /** The label assigned to the store group */
  store_group_name?: Maybe<Scalars['String']>;
  /** The label assigned to the store view */
  store_name?: Maybe<Scalars['String']>;
  /** The store view sort order */
  store_sort_order?: Maybe<Scalars['Int']>;
  /** Timezone of the store */
  timezone?: Maybe<Scalars['String']>;
  /** Page Title Prefix */
  title_prefix?: Maybe<Scalars['String']>;
  /** Page Title Separator. */
  title_separator?: Maybe<Scalars['String']>;
  /** Page Title Suffix */
  title_suffix?: Maybe<Scalars['String']>;
  /** The configuration determines if the store code should be used in the URL */
  use_store_in_url?: Maybe<Scalars['Boolean']>;
  /** The unique ID for the website */
  website_code?: Maybe<Scalars['ID']>;
  /**
   * The ID number assigned to the website store
   * @deprecated The field should not be used on the storefront
   */
  website_id?: Maybe<Scalars['Int']>;
  /** The label assigned to the website */
  website_name?: Maybe<Scalars['String']>;
  /** The unit of weight */
  weight_unit?: Maybe<Scalars['String']>;
  /** Welcome Text */
  welcome?: Maybe<Scalars['String']>;
}

export interface SubscribeEmailToNewsletterOutput {
  /** Returns the status of the subscription request */
  status?: Maybe<SubscriptionStatusesEnum>;
}

export enum SubscriptionStatusesEnum {
  NotActive = 'NOT_ACTIVE',
  Subscribed = 'SUBSCRIBED',
  Unconfirmed = 'UNCONFIRMED',
  Unsubscribed = 'UNSUBSCRIBED'
}

export interface SwatchData {
  /** Type of swatch filter item: 1 - text, 2 - image */
  type?: Maybe<Scalars['String']>;
  /** Value for swatch item (text or image link) */
  value?: Maybe<Scalars['String']>;
}

export interface SwatchDataInterface {
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
}

export interface SwatchLayerFilterItem extends LayerFilterItemInterface, SwatchLayerFilterItemInterface {
  /**
   * Count of items by filter.
   * @deprecated Use AggregationOption.count instead.
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * Filter label.
   * @deprecated Use AggregationOption.label instead.
   */
  label?: Maybe<Scalars['String']>;
  /** Data required to render swatch filter item */
  swatch_data?: Maybe<SwatchData>;
  /**
   * Value for filter request variable to be used in query.
   * @deprecated Use AggregationOption.value instead.
   */
  value_string?: Maybe<Scalars['String']>;
}

export interface SwatchLayerFilterItemInterface {
  /** Data required to render swatch filter item */
  swatch_data?: Maybe<SwatchData>;
}

/** The tax item details */
export interface TaxItem {
  /** The amount of tax applied to the item */
  amount: Money;
  /** The rate used to calculate the tax */
  rate: Scalars['Float'];
  /** A title that describes the tax */
  title: Scalars['String'];
}

export interface TextSwatchData extends SwatchDataInterface {
  /** Value of swatch item (HEX color code, image link or textual value) */
  value?: Maybe<Scalars['String']>;
}

/** A price based on the quantity purchased. */
export interface TierPrice {
  /** The price discount that this tier represents. */
  discount?: Maybe<ProductDiscount>;
  final_price?: Maybe<Money>;
  /** The minimum number of items that must be purchased to qualify for this price tier. */
  quantity?: Maybe<Scalars['Float']>;
}

export interface UpdateCartItemsInput {
  cart_id: Scalars['String'];
  cart_items: Array<Maybe<CartItemUpdateInput>>;
}

export interface UpdateCartItemsOutput {
  cart: Cart;
}

/** Contains the customer's wish list and any errors encountered */
export interface UpdateProductsInWishlistOutput {
  /** An array of errors encountered while updating products in a wish list */
  user_errors: Array<Maybe<WishListUserInputError>>;
  /** Contains the wish list with all items that were successfully updated */
  wishlist: Wishlist;
}

/** The object contains URL rewrite details */
export interface UrlRewrite {
  /** Request parameters */
  parameters?: Maybe<Array<Maybe<HttpQueryParameter>>>;
  /** Request URL */
  url?: Maybe<Scalars['String']>;
}

/** This enumeration defines the entity type. */
export enum UrlRewriteEntityTypeEnum {
  Category = 'CATEGORY',
  CmsPage = 'CMS_PAGE',
  Product = 'PRODUCT'
}

/** Required input for payment methods with Vault support. */
export interface VaultTokenInput {
  /** The public hash of the payment token */
  public_hash: Scalars['String'];
}

/** Virtual Cart Item */
export interface VirtualCartItem extends CartItemInterface {
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** @deprecated Use `uid` instead */
  id: Scalars['String'];
  prices?: Maybe<CartItemPrices>;
  product: ProductInterface;
  quantity: Scalars['Float'];
  /** The unique ID for a `CartItemInterface` object */
  uid: Scalars['ID'];
}

/** A virtual product is non-tangible product that does not require shipping and is not kept in inventory. */
export interface VirtualProduct extends CustomizableProductInterface, ProductInterface {
  activity?: Maybe<Scalars['String']>;
  /**
   * The attribute set assigned to the product.
   * @deprecated The field should not be used on the storefront.
   */
  attribute_set_id?: Maybe<Scalars['Int']>;
  /** Relative canonical URL. This value is returned only if the system setting 'Use Canonical Link Meta Tag For Products' is enabled */
  canonical_url?: Maybe<Scalars['String']>;
  /** The categories assigned to a product. */
  categories?: Maybe<Array<Maybe<CategoryInterface>>>;
  category_gear?: Maybe<Scalars['String']>;
  climate?: Maybe<Scalars['String']>;
  collar?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['Int']>;
  /** The product's country of origin. */
  country_of_manufacture?: Maybe<Scalars['String']>;
  /**
   * Timestamp indicating when the product was created.
   * @deprecated The field should not be used on the storefront.
   */
  created_at?: Maybe<Scalars['String']>;
  /** Crosssell Products */
  crosssell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** Detailed information about the product. The value can include simple HTML tags. */
  description?: Maybe<ComplexTextValue>;
  eco_collection?: Maybe<Scalars['Int']>;
  erin_recommends?: Maybe<Scalars['Int']>;
  features_bags?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['String']>;
  /** Indicates whether a gift message is available. */
  gift_message_available?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the product.
   * @deprecated Use the `uid` field instead.
   */
  id?: Maybe<Scalars['Int']>;
  /** The relative path to the main image on the product page. */
  image?: Maybe<ProductImage>;
  /** A number representing the product's manufacturer. */
  manufacturer?: Maybe<Scalars['Int']>;
  material?: Maybe<Scalars['String']>;
  /** An array of Media Gallery objects. */
  media_gallery?: Maybe<Array<Maybe<MediaGalleryInterface>>>;
  /**
   * An array of MediaGalleryEntry objects.
   * @deprecated Use product's `media_gallery` instead
   */
  media_gallery_entries?: Maybe<Array<Maybe<MediaGalleryEntry>>>;
  /** A brief overview of the product for search results listings, maximum 255 characters. */
  meta_description?: Maybe<Scalars['String']>;
  /** A comma-separated list of keywords that are visible only to search engines. */
  meta_keyword?: Maybe<Scalars['String']>;
  /** A string that is displayed in the title bar and tab of the browser and in search results lists. */
  meta_title?: Maybe<Scalars['String']>;
  /** The product name. Customers use this name to identify the product. */
  name?: Maybe<Scalars['String']>;
  new?: Maybe<Scalars['Int']>;
  /**
   * The beginning date for new product listings, and determines if the product is featured as a new product.
   * @deprecated The field should not be used on the storefront.
   */
  new_from_date?: Maybe<Scalars['String']>;
  /**
   * The end date for new product listings.
   * @deprecated The field should not be used on the storefront.
   */
  new_to_date?: Maybe<Scalars['String']>;
  /** Product stock only x left count */
  only_x_left_in_stock?: Maybe<Scalars['Float']>;
  /** An array of options for a customizable product. */
  options?: Maybe<Array<Maybe<CustomizableOptionInterface>>>;
  /** If the product has multiple options, determines where they appear on the product page. */
  options_container?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  performance_fabric?: Maybe<Scalars['Int']>;
  /**
   * A ProductPrices object, indicating the price of an item.
   * @deprecated Use price_range for product price information.
   */
  price?: Maybe<ProductPrices>;
  /** A PriceRange object, indicating the range of prices for the product */
  price_range: PriceRange;
  /** An array of TierPrice objects. */
  price_tiers?: Maybe<Array<Maybe<TierPrice>>>;
  /** An array of ProductLinks objects. */
  product_links?: Maybe<Array<Maybe<ProductLinksInterface>>>;
  /** The average of all the ratings given to the product. */
  rating_summary: Scalars['Float'];
  /** Related Products */
  related_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The total count of all the reviews given to the product. */
  review_count: Scalars['Int'];
  /** The list of products reviews. */
  reviews: ProductReviews;
  sale?: Maybe<Scalars['Int']>;
  /** A short description of the product. Its use depends on the theme. */
  short_description?: Maybe<ComplexTextValue>;
  size?: Maybe<Scalars['Int']>;
  /** A number or code assigned to a product to identify the product, options, price, and manufacturer. */
  sku?: Maybe<Scalars['String']>;
  sleeve?: Maybe<Scalars['String']>;
  /** The relative path to the small image, which is used on catalog pages. */
  small_image?: Maybe<ProductImage>;
  /**
   * The beginning date that a product has a special price.
   * @deprecated The field should not be used on the storefront.
   */
  special_from_date?: Maybe<Scalars['String']>;
  /** The discounted price of the product. */
  special_price?: Maybe<Scalars['Float']>;
  /** The end date that a product has a special price. */
  special_to_date?: Maybe<Scalars['String']>;
  /** Stock status of the product */
  stock_status?: Maybe<ProductStockStatus>;
  strap_bags?: Maybe<Scalars['String']>;
  style_bags?: Maybe<Scalars['String']>;
  style_bottom?: Maybe<Scalars['String']>;
  style_general?: Maybe<Scalars['String']>;
  /** The file name of a swatch image */
  swatch_image?: Maybe<Scalars['String']>;
  /** The relative path to the product's thumbnail image. */
  thumbnail?: Maybe<ProductImage>;
  /**
   * The price when tier pricing is in effect and the items purchased threshold has been reached.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_price?: Maybe<Scalars['Float']>;
  /**
   * An array of ProductTierPrices objects.
   * @deprecated Use price_tiers for product tier price information.
   */
  tier_prices?: Maybe<Array<Maybe<ProductTierPrices>>>;
  /**
   * One of simple, virtual, bundle, downloadable, grouped, or configurable.
   * @deprecated Use __typename instead.
   */
  type_id?: Maybe<Scalars['String']>;
  /** The unique ID for a `ProductInterface` object. */
  uid: Scalars['ID'];
  /**
   * Timestamp indicating when the product was updated.
   * @deprecated The field should not be used on the storefront.
   */
  updated_at?: Maybe<Scalars['String']>;
  /** Upsell Products */
  upsell_products?: Maybe<Array<Maybe<ProductInterface>>>;
  /** The part of the URL that identifies the product */
  url_key?: Maybe<Scalars['String']>;
  /** @deprecated Use product's `canonical_url` or url rewrites instead */
  url_path?: Maybe<Scalars['String']>;
  /** URL rewrites list */
  url_rewrites?: Maybe<Array<Maybe<UrlRewrite>>>;
  /** The part of the product URL that is appended after the url key */
  url_suffix?: Maybe<Scalars['String']>;
  /**
   * An array of websites in which the product is available.
   * @deprecated The field should not be used on the storefront.
   */
  websites?: Maybe<Array<Maybe<Website>>>;
}


/** A virtual product is non-tangible product that does not require shipping and is not kept in inventory. */
export interface VirtualProductReviewsArgs {
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}

export interface VirtualProductCartItemInput {
  customizable_options?: Maybe<Array<Maybe<CustomizableOptionInput>>>;
  data: CartItemInput;
}

/** A virtual product wish list item */
export interface VirtualWishlistItem extends WishlistItemInterface {
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
}

/** Website is deprecated because it is should not be used on storefront. The type contains information about a website */
export interface Website {
  /**
   * A code assigned to the website to identify it
   * @deprecated The field should not be used on the storefront.
   */
  code?: Maybe<Scalars['String']>;
  /**
   * The default group ID that the website has
   * @deprecated The field should not be used on the storefront.
   */
  default_group_id?: Maybe<Scalars['String']>;
  /**
   * The ID number assigned to the website
   * @deprecated The field should not be used on the storefront.
   */
  id?: Maybe<Scalars['Int']>;
  /**
   * Specifies if this is the default website
   * @deprecated The field should not be used on the storefront.
   */
  is_default?: Maybe<Scalars['Boolean']>;
  /**
   * The website name. Websites use this name to identify it easier.
   * @deprecated The field should not be used on the storefront.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The attribute to use for sorting websites
   * @deprecated The field should not be used on the storefront.
   */
  sort_order?: Maybe<Scalars['Int']>;
}

/** An error encountered while performing operations with WishList. */
export interface WishListUserInputError {
  /** Wishlist-specific error code */
  code: WishListUserInputErrorType;
  /** A localized error message */
  message: Scalars['String'];
}

export enum WishListUserInputErrorType {
  ProductNotFound = 'PRODUCT_NOT_FOUND',
  Undefined = 'UNDEFINED'
}

export interface Wishlist {
  /** The unique ID for a `Wishlist` object */
  id?: Maybe<Scalars['ID']>;
  /** @deprecated Use field `items_v2` from type `Wishlist` instead */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /** The number of items in the wish list */
  items_count?: Maybe<Scalars['Int']>;
  /** An array of items in the customer's wish list */
  items_v2?: Maybe<WishlistItems>;
  /** An encrypted code that Magento uses to link to the wish list */
  sharing_code?: Maybe<Scalars['String']>;
  /** The time of the last modification to the wish list */
  updated_at?: Maybe<Scalars['String']>;
}


export interface WishlistItems_V2Args {
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}

export interface WishlistItem {
  /** The time when the customer added the item to the wish list */
  added_at?: Maybe<Scalars['String']>;
  /** The customer's comment about this item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItem` object */
  id?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  qty?: Maybe<Scalars['Float']>;
}

/** Defines the items to add to a wish list */
export interface WishlistItemInput {
  /** An array of options that the customer entered */
  entered_options?: Maybe<Array<Maybe<EnteredOptionInput>>>;
  /** For complex product types, the SKU of the parent product */
  parent_sku?: Maybe<Scalars['String']>;
  /** The amount or number of items to add */
  quantity: Scalars['Float'];
  /** An array of strings corresponding to options the customer selected */
  selected_options?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** The SKU of the product to add. For complex product types, specify the child product SKU */
  sku: Scalars['String'];
}

export interface WishlistItemInterface {
  /** The date and time the item was added to the wish list */
  added_at: Scalars['String'];
  /** Custom options selected for the wish list item */
  customizable_options: Array<Maybe<SelectedCustomizableOption>>;
  /** The description of the item */
  description?: Maybe<Scalars['String']>;
  /** The unique ID for a `WishlistItemInterface` object */
  id: Scalars['ID'];
  /** Product details of the wish list item */
  product?: Maybe<ProductInterface>;
  /** The quantity of this wish list item */
  quantity: Scalars['Float'];
}

/** Defines updates to items in a wish list */
export interface WishlistItemUpdateInput {
  /** Customer-entered comments about the item */
  description?: Maybe<Scalars['String']>;
  /** An array of options that the customer entered */
  entered_options?: Maybe<Array<Maybe<EnteredOptionInput>>>;
  /** The new amount or number of this item */
  quantity?: Maybe<Scalars['Float']>;
  /** An array of strings corresponding to options the customer selected */
  selected_options?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** The unique ID for a `WishlistItemInterface` object */
  wishlist_item_id: Scalars['ID'];
}

export interface WishlistItems {
  /** A list of items in the wish list */
  items: Array<Maybe<WishlistItemInterface>>;
  /** Contains pagination metadata */
  page_info?: Maybe<SearchResultPageInfo>;
}

/** Deprecated: `Wishlist` type should be used instead */
export interface WishlistOutput {
  /**
   * An array of items in the customer's wish list
   * @deprecated Use field `items` from type `Wishlist` instead
   */
  items?: Maybe<Array<Maybe<WishlistItem>>>;
  /**
   * The number of items in the wish list
   * @deprecated Use field `items_count` from type `Wishlist` instead
   */
  items_count?: Maybe<Scalars['Int']>;
  /**
   * When multiple wish lists are enabled, the name the customer assigns to the wishlist
   * @deprecated This field is related to Commerce functionality and is always `null` in Open Source edition
   */
  name?: Maybe<Scalars['String']>;
  /**
   * An encrypted code that Magento uses to link to the wish list
   * @deprecated Use field `sharing_code` from type `Wishlist` instead
   */
  sharing_code?: Maybe<Scalars['String']>;
  /**
   * The time of the last modification to the wish list
   * @deprecated Use field `updated_at` from type `Wishlist` instead
   */
  updated_at?: Maybe<Scalars['String']>;
}

export interface CreateEmptyCartInput {
  cart_id?: Maybe<Scalars['String']>;
}

export interface CreateKlarnaPaymentsSessionInput {
  cart_id: Scalars['String'];
}

export interface CreateKlarnaPaymentsSessionOutput {
  /** The payment method client token */
  client_token?: Maybe<Scalars['String']>;
  /** The payment method categories */
  payment_method_categories?: Maybe<Array<Maybe<Categories>>>;
}

export type AddConfigurableProductsToCartMutationVariables = Exact<{
  input?: Maybe<AddConfigurableProductsToCartInput>;
}>;


export type AddConfigurableProductsToCartMutation = { addConfigurableProductsToCart?: Maybe<{ cart: CompleteCartDataFragment }> };

export type AddSimpleProductsToCartMutationVariables = Exact<{
  input?: Maybe<AddSimpleProductsToCartInput>;
}>;


export type AddSimpleProductsToCartMutation = { addSimpleProductsToCart?: Maybe<{ cart: CompleteCartDataFragment }> };

export type ApplyCouponToCartMutationVariables = Exact<{
  input?: Maybe<ApplyCouponToCartInput>;
}>;


export type ApplyCouponToCartMutation = { applyCouponToCart?: Maybe<{ cart: CompleteCartDataFragment }> };

export type CartQueryVariables = Exact<{
  cartId: Scalars['String'];
}>;


export type CartQuery = { cart?: Maybe<CompleteCartDataFragment> };

export type CategoryListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryListQuery = { categories?: Maybe<{ items?: Maybe<Array<Maybe<(
      Pick<CategoryTree, 'product_count' | 'name' | 'uid'>
      & { children?: Maybe<Array<Maybe<(
        { children?: Maybe<Array<Maybe<(
          CategoryDataFragment
          & CategoryUrlDataFragment
        )>>> }
        & CategoryDataFragment
        & CategoryUrlDataFragment
      )>>> }
    )>>> }> };

export type CategorySearchQueryVariables = Exact<{
  filters?: Maybe<CategoryFilterInput>;
}>;


export type CategorySearchQuery = { categoryList?: Maybe<Array<Maybe<(
    CategoryDataFragment
    & CategoryUrlDataFragment
  )>>> };

export type ChangeCustomerPasswordMutationVariables = Exact<{
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangeCustomerPasswordMutation = { changeCustomerPassword?: Maybe<CustomerDataFragment> };

export type CmsPageQueryVariables = Exact<{
  identifier?: Maybe<Scalars['String']>;
}>;


export type CmsPageQuery = { cmsPage?: Maybe<Pick<CmsPage, 'identifier' | 'content' | 'title' | 'meta_title' | 'meta_description' | 'content_heading'>> };

export type ConfigurableProductDetailQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductAttributeFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductAttributeSortInput>;
}>;


export type ConfigurableProductDetailQuery = { products?: Maybe<{ items?: Maybe<Array<Maybe<Pick<BundleProduct, 'uid'> | (
      Pick<ConfigurableProduct, 'uid'>
      & ConfigurableProductOptionsDataFragment
    ) | Pick<DownloadableProduct, 'uid'> | Pick<GroupedProduct, 'uid'> | Pick<SimpleProduct, 'uid'> | Pick<VirtualProduct, 'uid'>>>> }> };

export type CountriesListQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesListQuery = { countries?: Maybe<Array<Maybe<Pick<Country, 'id' | 'two_letter_abbreviation' | 'full_name_locale' | 'full_name_english'>>>> };

export type CountryInformationQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type CountryInformationQuery = { country?: Maybe<(
    Pick<Country, 'id' | 'two_letter_abbreviation' | 'full_name_locale' | 'full_name_english'>
    & { available_regions?: Maybe<Array<Maybe<Pick<Region, 'id' | 'code' | 'name'>>>> }
  )> };

export type CreateCustomerMutationVariables = Exact<{
  input: CustomerCreateInput;
}>;


export type CreateCustomerMutation = { createCustomerV2?: Maybe<{ customer: CustomerDataFragment }> };

export type CreateCustomerAddressMutationVariables = Exact<{
  input: CustomerAddressInput;
}>;


export type CreateCustomerAddressMutation = { createCustomerAddress?: Maybe<(
    Pick<CustomerAddress, 'id' | 'country_code' | 'street' | 'telephone' | 'postcode' | 'city' | 'default_shipping' | 'default_billing'>
    & { region?: Maybe<Pick<CustomerAddressRegion, 'region' | 'region_id' | 'region_code'>> }
  )> };

export type CreateEmptyCartMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateEmptyCartMutation = Pick<Mutation, 'createEmptyCart'>;

export type CustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomerQuery = { customer?: Maybe<CustomerDataFragment> };

export type CustomerCartQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomerCartQuery = { customerCart: CompleteCartDataFragment };

export type CustomerOrdersQueryVariables = Exact<{
  currentPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<CustomerOrdersFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
}>;


export type CustomerOrdersQuery = { customer?: Maybe<{ orders?: Maybe<{ items: Array<Maybe<(
        Pick<CustomerOrder, 'order_number' | 'id' | 'created_at' | 'grand_total' | 'status' | 'shipping_method'>
        & { total?: Maybe<OrderTotalDataFragment>, comments?: Maybe<Array<Maybe<Pick<SalesCommentItem, 'message' | 'timestamp'>>>>, invoices: Array<Maybe<(
          Pick<Invoice, 'id' | 'number'>
          & { comments?: Maybe<Array<Maybe<Pick<SalesCommentItem, 'message' | 'timestamp'>>>>, items?: Maybe<Array<Maybe<InvoiceItemData_BundleInvoiceItem_Fragment | InvoiceItemData_DownloadableInvoiceItem_Fragment | InvoiceItemData_InvoiceItem_Fragment>>>, total?: Maybe<InvoiceTotalDataFragment> }
        )>>, items?: Maybe<Array<Maybe<OrderItemData_BundleOrderItem_Fragment | OrderItemData_DownloadableOrderItem_Fragment | OrderItemData_OrderItem_Fragment>>>, payment_methods?: Maybe<Array<Maybe<(
          Pick<OrderPaymentMethod, 'name' | 'type'>
          & { additional_data?: Maybe<Array<Maybe<Pick<KeyValue, 'name' | 'value'>>>> }
        )>>>, shipments?: Maybe<Array<Maybe<(
          Pick<OrderShipment, 'id' | 'number'>
          & { comments?: Maybe<Array<Maybe<Pick<SalesCommentItem, 'message' | 'timestamp'>>>>, tracking?: Maybe<Array<Maybe<Pick<ShipmentTracking, 'carrier' | 'number' | 'title'>>>>, items?: Maybe<Array<Maybe<ShipmentItemData_BundleShipmentItem_Fragment | ShipmentItemData_ShipmentItem_Fragment>>> }
        )>>>, shipping_address?: Maybe<OrderAddressDataFragment> }
      )>> }> }> };

export type DeleteCustomerAddressMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCustomerAddressMutation = Pick<Mutation, 'deleteCustomerAddress'>;

export type GenerateCustomerTokenMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type GenerateCustomerTokenMutation = { generateCustomerToken?: Maybe<Pick<CustomerToken, 'token'>> };

export type CustomerAvailablePaymentMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomerAvailablePaymentMethodsQuery = { customerCart: { available_payment_methods?: Maybe<Array<Maybe<Pick<AvailablePaymentMethod, 'code' | 'title'>>>> } };

export type CustomerAvailableShippingMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomerAvailableShippingMethodsQuery = { customerCart: { shipping_addresses: Array<Maybe<{ available_shipping_methods?: Maybe<Array<Maybe<(
        Pick<AvailableShippingMethod, 'available' | 'carrier_code' | 'carrier_title' | 'error_message' | 'method_code' | 'method_title'>
        & { amount: Pick<Money, 'currency' | 'value'>, price_excl_tax: Pick<Money, 'currency' | 'value'>, price_incl_tax: Pick<Money, 'currency' | 'value'> }
      )>>> }>> } };

export type GuestAvailablePaymentMethodsQueryVariables = Exact<{
  cartId: Scalars['String'];
}>;


export type GuestAvailablePaymentMethodsQuery = { cart?: Maybe<{ available_payment_methods?: Maybe<Array<Maybe<Pick<AvailablePaymentMethod, 'code' | 'title'>>>> }> };

export type GuestAvailableShippingMethodsQueryVariables = Exact<{
  cart_id: Scalars['String'];
}>;


export type GuestAvailableShippingMethodsQuery = { cart?: Maybe<{ shipping_addresses: Array<Maybe<{ available_shipping_methods?: Maybe<Array<Maybe<(
        Pick<AvailableShippingMethod, 'available' | 'carrier_code' | 'carrier_title' | 'error_message' | 'method_code' | 'method_title'>
        & { amount: Pick<Money, 'currency' | 'value'>, price_excl_tax: Pick<Money, 'currency' | 'value'>, price_incl_tax: Pick<Money, 'currency' | 'value'> }
      )>>> }>> }> };

export type GetMenuCategoryQueryVariables = Exact<{
  filters?: Maybe<CategoryFilterInput>;
}>;


export type GetMenuCategoryQuery = { categories?: Maybe<(
    Pick<CategoryResult, 'total_count'>
    & { items?: Maybe<Array<Maybe<(
      Pick<CategoryTree, 'children_count'>
      & { children?: Maybe<Array<Maybe<(
        Pick<CategoryTree, 'children_count'>
        & { children?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'children_count'>
          & CategoryDataFragment
          & CategoryUrlDataFragment
        )>>> }
        & CategoryDataFragment
        & CategoryUrlDataFragment
      )>>> }
      & CategoryDataFragment
      & CategoryUrlDataFragment
    )>>>, page_info?: Maybe<Pick<SearchResultPageInfo, 'current_page' | 'page_size' | 'total_pages'>> }
  )> };

export type MergeCartsMutationVariables = Exact<{
  sourceCartId: Scalars['String'];
  destinationCartId: Scalars['String'];
}>;


export type MergeCartsMutation = { mergeCarts: CompleteCartDataFragment };

export type PlaceOrderMutationVariables = Exact<{
  input?: Maybe<PlaceOrderInput>;
}>;


export type PlaceOrderMutation = { placeOrder?: Maybe<{ order: Pick<Order, 'order_number'> }> };

export type ProductDetailsQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductAttributeFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductAttributeSortInput>;
}>;


export type ProductDetailsQuery = { products?: Maybe<{ items?: Maybe<Array<Maybe<(
      Pick<BundleProduct, 'options_container' | 'meta_description' | 'meta_keyword' | 'meta_title'>
      & { description?: Maybe<Pick<ComplexTextValue, 'html'>>, short_description?: Maybe<Pick<ComplexTextValue, 'html'>> }
      & ProductData_BundleProduct_Fragment
      & ProductPriceRangeData_BundleProduct_Fragment
      & ProductImagesData_BundleProduct_Fragment
      & ProductGalleryData_BundleProduct_Fragment
      & ProductThumbnailData_BundleProduct_Fragment
      & ProductUrlFragmentData_BundleProduct_Fragment
    ) | (
      Pick<ConfigurableProduct, 'options_container' | 'meta_description' | 'meta_keyword' | 'meta_title'>
      & { description?: Maybe<Pick<ComplexTextValue, 'html'>>, short_description?: Maybe<Pick<ComplexTextValue, 'html'>> }
      & ProductData_ConfigurableProduct_Fragment
      & ProductPriceRangeData_ConfigurableProduct_Fragment
      & ProductImagesData_ConfigurableProduct_Fragment
      & ProductGalleryData_ConfigurableProduct_Fragment
      & ProductThumbnailData_ConfigurableProduct_Fragment
      & ProductUrlFragmentData_ConfigurableProduct_Fragment
    ) | (
      Pick<DownloadableProduct, 'options_container' | 'meta_description' | 'meta_keyword' | 'meta_title'>
      & { description?: Maybe<Pick<ComplexTextValue, 'html'>>, short_description?: Maybe<Pick<ComplexTextValue, 'html'>> }
      & ProductData_DownloadableProduct_Fragment
      & ProductPriceRangeData_DownloadableProduct_Fragment
      & ProductImagesData_DownloadableProduct_Fragment
      & ProductGalleryData_DownloadableProduct_Fragment
      & ProductThumbnailData_DownloadableProduct_Fragment
      & ProductUrlFragmentData_DownloadableProduct_Fragment
    ) | (
      Pick<GroupedProduct, 'options_container' | 'meta_description' | 'meta_keyword' | 'meta_title'>
      & { description?: Maybe<Pick<ComplexTextValue, 'html'>>, short_description?: Maybe<Pick<ComplexTextValue, 'html'>> }
      & ProductData_GroupedProduct_Fragment
      & ProductPriceRangeData_GroupedProduct_Fragment
      & ProductImagesData_GroupedProduct_Fragment
      & ProductGalleryData_GroupedProduct_Fragment
      & ProductThumbnailData_GroupedProduct_Fragment
      & ProductUrlFragmentData_GroupedProduct_Fragment
    ) | (
      Pick<SimpleProduct, 'options_container' | 'meta_description' | 'meta_keyword' | 'meta_title'>
      & { description?: Maybe<Pick<ComplexTextValue, 'html'>>, short_description?: Maybe<Pick<ComplexTextValue, 'html'>> }
      & ProductData_SimpleProduct_Fragment
      & ProductPriceRangeData_SimpleProduct_Fragment
      & ProductImagesData_SimpleProduct_Fragment
      & ProductGalleryData_SimpleProduct_Fragment
      & ProductThumbnailData_SimpleProduct_Fragment
      & ProductUrlFragmentData_SimpleProduct_Fragment
    ) | (
      Pick<VirtualProduct, 'options_container' | 'meta_description' | 'meta_keyword' | 'meta_title'>
      & { description?: Maybe<Pick<ComplexTextValue, 'html'>>, short_description?: Maybe<Pick<ComplexTextValue, 'html'>> }
      & ProductData_VirtualProduct_Fragment
      & ProductPriceRangeData_VirtualProduct_Fragment
      & ProductImagesData_VirtualProduct_Fragment
      & ProductGalleryData_VirtualProduct_Fragment
      & ProductThumbnailData_VirtualProduct_Fragment
      & ProductUrlFragmentData_VirtualProduct_Fragment
    )>>> }> };

export type ProductReviewQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductAttributeFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductAttributeSortInput>;
}>;


export type ProductReviewQuery = { products?: Maybe<{ items?: Maybe<Array<Maybe<(
      Pick<BundleProduct, 'review_count'>
      & { reviews: { items: Array<Maybe<(
          Pick<ProductReview, 'average_rating' | 'nickname' | 'summary' | 'text' | 'created_at'>
          & { ratings_breakdown: Array<Maybe<Pick<ProductReviewRating, 'name' | 'value'>>> }
        )>>, page_info: Pick<SearchResultPageInfo, 'current_page' | 'page_size' | 'total_pages'> } }
    ) | (
      Pick<ConfigurableProduct, 'review_count'>
      & { reviews: { items: Array<Maybe<(
          Pick<ProductReview, 'average_rating' | 'nickname' | 'summary' | 'text' | 'created_at'>
          & { ratings_breakdown: Array<Maybe<Pick<ProductReviewRating, 'name' | 'value'>>> }
        )>>, page_info: Pick<SearchResultPageInfo, 'current_page' | 'page_size' | 'total_pages'> } }
    ) | (
      Pick<DownloadableProduct, 'review_count'>
      & { reviews: { items: Array<Maybe<(
          Pick<ProductReview, 'average_rating' | 'nickname' | 'summary' | 'text' | 'created_at'>
          & { ratings_breakdown: Array<Maybe<Pick<ProductReviewRating, 'name' | 'value'>>> }
        )>>, page_info: Pick<SearchResultPageInfo, 'current_page' | 'page_size' | 'total_pages'> } }
    ) | (
      Pick<GroupedProduct, 'review_count'>
      & { reviews: { items: Array<Maybe<(
          Pick<ProductReview, 'average_rating' | 'nickname' | 'summary' | 'text' | 'created_at'>
          & { ratings_breakdown: Array<Maybe<Pick<ProductReviewRating, 'name' | 'value'>>> }
        )>>, page_info: Pick<SearchResultPageInfo, 'current_page' | 'page_size' | 'total_pages'> } }
    ) | (
      Pick<SimpleProduct, 'review_count'>
      & { reviews: { items: Array<Maybe<(
          Pick<ProductReview, 'average_rating' | 'nickname' | 'summary' | 'text' | 'created_at'>
          & { ratings_breakdown: Array<Maybe<Pick<ProductReviewRating, 'name' | 'value'>>> }
        )>>, page_info: Pick<SearchResultPageInfo, 'current_page' | 'page_size' | 'total_pages'> } }
    ) | (
      Pick<VirtualProduct, 'review_count'>
      & { reviews: { items: Array<Maybe<(
          Pick<ProductReview, 'average_rating' | 'nickname' | 'summary' | 'text' | 'created_at'>
          & { ratings_breakdown: Array<Maybe<Pick<ProductReviewRating, 'name' | 'value'>>> }
        )>>, page_info: Pick<SearchResultPageInfo, 'current_page' | 'page_size' | 'total_pages'> } }
    )>>> }> };

export type ProductsListQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductAttributeFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductAttributeSortInput>;
}>;


export type ProductsListQuery = { products?: Maybe<(
    Pick<Products, 'total_count'>
    & { aggregations?: Maybe<Array<Maybe<(
      Pick<Aggregation, 'attribute_code' | 'label'>
      & { options?: Maybe<Array<Maybe<Pick<AggregationOption, 'label' | 'value' | 'count'>>>> }
    )>>>, items?: Maybe<Array<Maybe<ProductData_BundleProduct_Fragment | ProductData_ConfigurableProduct_Fragment | ProductData_DownloadableProduct_Fragment | ProductData_GroupedProduct_Fragment | ProductData_SimpleProduct_Fragment | ProductData_VirtualProduct_Fragment>>>, page_info?: Maybe<Pick<SearchResultPageInfo, 'current_page' | 'page_size' | 'total_pages'>> }
  )> };

export type RelatedProductQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductAttributeFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductAttributeSortInput>;
}>;


export type RelatedProductQuery = { products?: Maybe<{ items?: Maybe<Array<Maybe<(
      Pick<BundleProduct, 'uid'>
      & { related_products?: Maybe<Array<Maybe<(
        { __typename: 'BundleProduct' }
        & Pick<BundleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'GroupedProduct' }
        & Pick<GroupedProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'SimpleProduct' }
        & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'VirtualProduct' }
        & Pick<VirtualProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      )>>> }
    ) | (
      Pick<ConfigurableProduct, 'uid'>
      & { related_products?: Maybe<Array<Maybe<(
        { __typename: 'BundleProduct' }
        & Pick<BundleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'GroupedProduct' }
        & Pick<GroupedProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'SimpleProduct' }
        & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'VirtualProduct' }
        & Pick<VirtualProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      )>>> }
    ) | (
      Pick<DownloadableProduct, 'uid'>
      & { related_products?: Maybe<Array<Maybe<(
        { __typename: 'BundleProduct' }
        & Pick<BundleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'GroupedProduct' }
        & Pick<GroupedProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'SimpleProduct' }
        & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'VirtualProduct' }
        & Pick<VirtualProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      )>>> }
    ) | (
      Pick<GroupedProduct, 'uid'>
      & { related_products?: Maybe<Array<Maybe<(
        { __typename: 'BundleProduct' }
        & Pick<BundleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'GroupedProduct' }
        & Pick<GroupedProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'SimpleProduct' }
        & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'VirtualProduct' }
        & Pick<VirtualProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      )>>> }
    ) | (
      Pick<SimpleProduct, 'uid'>
      & { related_products?: Maybe<Array<Maybe<(
        { __typename: 'BundleProduct' }
        & Pick<BundleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'GroupedProduct' }
        & Pick<GroupedProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'SimpleProduct' }
        & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'VirtualProduct' }
        & Pick<VirtualProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      )>>> }
    ) | (
      Pick<VirtualProduct, 'uid'>
      & { related_products?: Maybe<Array<Maybe<(
        { __typename: 'BundleProduct' }
        & Pick<BundleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'GroupedProduct' }
        & Pick<GroupedProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'SimpleProduct' }
        & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'VirtualProduct' }
        & Pick<VirtualProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      )>>> }
    )>>> }> };

export type RemoveCouponFromCartMutationVariables = Exact<{
  input?: Maybe<RemoveCouponFromCartInput>;
}>;


export type RemoveCouponFromCartMutation = { removeCouponFromCart?: Maybe<{ cart?: Maybe<CompleteCartDataFragment> }> };

export type RemoveItemFromCartMutationVariables = Exact<{
  input?: Maybe<RemoveItemFromCartInput>;
}>;


export type RemoveItemFromCartMutation = { removeItemFromCart?: Maybe<{ cart: CompleteCartDataFragment }> };

export type RevokeCustomerTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RevokeCustomerTokenMutation = { revokeCustomerToken?: Maybe<Pick<RevokeCustomerTokenOutput, 'result'>> };

export type SetBillingAddressOnCartMutationVariables = Exact<{
  input?: Maybe<SetBillingAddressOnCartInput>;
}>;


export type SetBillingAddressOnCartMutation = { setBillingAddressOnCart?: Maybe<{ cart: { billing_address?: Maybe<(
        Pick<BillingCartAddress, 'firstname' | 'lastname' | 'company' | 'street' | 'city' | 'postcode' | 'telephone'>
        & { region?: Maybe<Pick<CartAddressRegion, 'code' | 'region_id' | 'label'>>, country: Pick<CartAddressCountry, 'code' | 'label'> }
      )> } }> };

export type SetGuestEmailOnCartMutationVariables = Exact<{
  input?: Maybe<SetGuestEmailOnCartInput>;
}>;


export type SetGuestEmailOnCartMutation = { setGuestEmailOnCart?: Maybe<{ cart: Pick<Cart, 'email'> }> };

export type SetPaymentMethodOnCartMutationVariables = Exact<{
  input?: Maybe<SetPaymentMethodOnCartInput>;
}>;


export type SetPaymentMethodOnCartMutation = { setPaymentMethodOnCart?: Maybe<{ cart: { available_payment_methods?: Maybe<Array<Maybe<Pick<AvailablePaymentMethod, 'code' | 'title'>>>>, selected_payment_method?: Maybe<Pick<SelectedPaymentMethod, 'code' | 'title'>> } }> };

export type SetShippingAddressesOnCartMutationVariables = Exact<{
  input?: Maybe<SetShippingAddressesOnCartInput>;
}>;


export type SetShippingAddressesOnCartMutation = { setShippingAddressesOnCart?: Maybe<{ cart: { shipping_addresses: Array<Maybe<(
        Pick<ShippingCartAddress, 'city' | 'company' | 'firstname' | 'lastname' | 'postcode' | 'street' | 'telephone'>
        & { region?: Maybe<Pick<CartAddressRegion, 'code' | 'label' | 'region_id'>>, country: Pick<CartAddressCountry, 'code' | 'label'>, available_shipping_methods?: Maybe<Array<Maybe<(
          Pick<AvailableShippingMethod, 'available' | 'carrier_code' | 'carrier_title' | 'error_message' | 'method_code' | 'method_title'>
          & { amount: Pick<Money, 'currency' | 'value'>, price_excl_tax: Pick<Money, 'currency' | 'value'>, price_incl_tax: Pick<Money, 'currency' | 'value'> }
        )>>> }
      )>> } }> };

export type SetShippingMethodsOnCartMutationVariables = Exact<{
  input?: Maybe<SetShippingMethodsOnCartInput>;
}>;


export type SetShippingMethodsOnCartMutation = { setShippingMethodsOnCart?: Maybe<{ cart: { shipping_addresses: Array<Maybe<{ selected_shipping_method?: Maybe<(
          Pick<SelectedShippingMethod, 'carrier_code' | 'carrier_title' | 'method_code' | 'method_title'>
          & { amount: Pick<Money, 'value' | 'currency'> }
        )> }>> } }> };

export type StoreConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type StoreConfigQuery = { storeConfig?: Maybe<Pick<StoreConfig, 'absolute_footer' | 'base_currency_code' | 'catalog_default_sort_by' | 'category_url_suffix' | 'cms_home_page' | 'cms_no_cookies' | 'no_route' | 'id' | 'code' | 'website_id' | 'copyright' | 'default_title' | 'title_prefix' | 'title_separator' | 'title_suffix' | 'default_description' | 'default_keywords' | 'default_display_currency_code' | 'grid_per_page' | 'grid_per_page_values' | 'list_per_page' | 'list_per_page_values' | 'head_shortcut_icon' | 'header_logo_src' | 'locale' | 'logo_alt' | 'logo_height' | 'logo_width' | 'product_url_suffix' | 'root_category_id' | 'show_cms_breadcrumbs' | 'store_name' | 'timezone' | 'welcome'>> };

export type UpdateCartItemsMutationVariables = Exact<{
  input?: Maybe<UpdateCartItemsInput>;
}>;


export type UpdateCartItemsMutation = { updateCartItems?: Maybe<{ cart: CompleteCartDataFragment }> };

export type UpdateCustomerMutationVariables = Exact<{
  input: CustomerUpdateInput;
}>;


export type UpdateCustomerMutation = { updateCustomerV2?: Maybe<{ customer: CustomerDataFragment }> };

export type UpdateCustomerAddressMutationVariables = Exact<{
  id: Scalars['Int'];
  input?: Maybe<CustomerAddressInput>;
}>;


export type UpdateCustomerAddressMutation = { updateCustomerAddress?: Maybe<(
    Pick<CustomerAddress, 'id' | 'city' | 'company' | 'country_code' | 'default_billing' | 'default_shipping' | 'fax' | 'firstname' | 'lastname' | 'middlename' | 'postcode' | 'prefix' | 'street' | 'suffix' | 'telephone' | 'vat_id'>
    & { extension_attributes?: Maybe<Array<Maybe<Pick<CustomerAddressAttribute, 'attribute_code' | 'value'>>>>, region?: Maybe<Pick<CustomerAddressRegion, 'region' | 'region_code' | 'region_id'>> }
  )> };

export type UpsellProductsQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<ProductAttributeFilterInput>;
  pageSize?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductAttributeSortInput>;
}>;


export type UpsellProductsQuery = { products?: Maybe<{ items?: Maybe<Array<Maybe<(
      Pick<BundleProduct, 'uid'>
      & { upsell_products?: Maybe<Array<Maybe<(
        { __typename: 'BundleProduct' }
        & Pick<BundleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'GroupedProduct' }
        & Pick<GroupedProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'SimpleProduct' }
        & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'VirtualProduct' }
        & Pick<VirtualProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      )>>> }
    ) | (
      Pick<ConfigurableProduct, 'uid'>
      & { upsell_products?: Maybe<Array<Maybe<(
        { __typename: 'BundleProduct' }
        & Pick<BundleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'GroupedProduct' }
        & Pick<GroupedProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'SimpleProduct' }
        & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'VirtualProduct' }
        & Pick<VirtualProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      )>>> }
    ) | (
      Pick<DownloadableProduct, 'uid'>
      & { upsell_products?: Maybe<Array<Maybe<(
        { __typename: 'BundleProduct' }
        & Pick<BundleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'GroupedProduct' }
        & Pick<GroupedProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'SimpleProduct' }
        & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'VirtualProduct' }
        & Pick<VirtualProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      )>>> }
    ) | (
      Pick<GroupedProduct, 'uid'>
      & { upsell_products?: Maybe<Array<Maybe<(
        { __typename: 'BundleProduct' }
        & Pick<BundleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'GroupedProduct' }
        & Pick<GroupedProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'SimpleProduct' }
        & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'VirtualProduct' }
        & Pick<VirtualProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      )>>> }
    ) | (
      Pick<SimpleProduct, 'uid'>
      & { upsell_products?: Maybe<Array<Maybe<(
        { __typename: 'BundleProduct' }
        & Pick<BundleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'GroupedProduct' }
        & Pick<GroupedProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'SimpleProduct' }
        & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'VirtualProduct' }
        & Pick<VirtualProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      )>>> }
    ) | (
      Pick<VirtualProduct, 'uid'>
      & { upsell_products?: Maybe<Array<Maybe<(
        { __typename: 'BundleProduct' }
        & Pick<BundleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'ConfigurableProduct' }
        & Pick<ConfigurableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'DownloadableProduct' }
        & Pick<DownloadableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'GroupedProduct' }
        & Pick<GroupedProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'SimpleProduct' }
        & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      ) | (
        { __typename: 'VirtualProduct' }
        & Pick<VirtualProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary' | 'url_key'>
        & { thumbnail?: Maybe<Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>>, price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } }, url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>>, categories?: Maybe<Array<Maybe<(
          Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
          & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
        )>>> }
      )>>> }
    )>>> }> };

export type UrlResloverQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type UrlResloverQuery = { urlResolver?: Maybe<Pick<EntityUrl, 'id' | 'redirectCode' | 'relative_url' | 'type' | 'entity_uid'>> };

export type WishlistQueryVariables = Exact<{
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
}>;


export type WishlistQuery = { customer?: Maybe<{ wishlists: Array<Maybe<(
      Pick<Wishlist, 'id' | 'items_count' | 'sharing_code'>
      & { items_v2?: Maybe<{ items: Array<Maybe<(
          Pick<BundleWishlistItem, 'id' | 'quantity' | 'description' | 'added_at'>
          & { product?: Maybe<(
            Pick<BundleProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<ConfigurableProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<DownloadableProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<GroupedProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<SimpleProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<VirtualProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          )> }
        ) | (
          Pick<ConfigurableWishlistItem, 'id' | 'quantity' | 'description' | 'added_at'>
          & { product?: Maybe<(
            Pick<BundleProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<ConfigurableProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<DownloadableProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<GroupedProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<SimpleProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<VirtualProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          )> }
        ) | (
          Pick<DownloadableWishlistItem, 'id' | 'quantity' | 'description' | 'added_at'>
          & { product?: Maybe<(
            Pick<BundleProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<ConfigurableProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<DownloadableProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<GroupedProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<SimpleProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<VirtualProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          )> }
        ) | (
          Pick<GroupedProductWishlistItem, 'id' | 'quantity' | 'description' | 'added_at'>
          & { product?: Maybe<(
            Pick<BundleProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<ConfigurableProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<DownloadableProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<GroupedProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<SimpleProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<VirtualProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          )> }
        ) | (
          Pick<SimpleWishlistItem, 'id' | 'quantity' | 'description' | 'added_at'>
          & { product?: Maybe<(
            Pick<BundleProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<ConfigurableProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<DownloadableProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<GroupedProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<SimpleProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<VirtualProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          )> }
        ) | (
          Pick<VirtualWishlistItem, 'id' | 'quantity' | 'description' | 'added_at'>
          & { product?: Maybe<(
            Pick<BundleProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<ConfigurableProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<DownloadableProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<GroupedProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<SimpleProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          ) | (
            Pick<VirtualProduct, 'uid' | 'name' | 'sku' | 'special_price' | 'attribute_set_id' | 'type_id' | 'manufacturer' | 'canonical_url'>
            & { image?: Maybe<Pick<ProductImage, 'url' | 'label'>>, price_tiers?: Maybe<Array<Maybe<(
              Pick<TierPrice, 'quantity'>
              & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
            )>>>, categories?: Maybe<Array<Maybe<Pick<CategoryTree, 'id' | 'name' | 'path'>>>>, media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> }
          )> }
        )>>, page_info?: Maybe<Pick<SearchResultPageInfo, 'current_page' | 'page_size' | 'total_pages'>> }> }
    )>> }> };

export type CustomerAddressDataFragment = (
  Pick<CustomerAddress, 'city' | 'country_code' | 'default_billing' | 'default_shipping' | 'firstname' | 'id' | 'lastname' | 'postcode' | 'prefix' | 'street' | 'suffix' | 'telephone'>
  & { extension_attributes?: Maybe<Array<Maybe<Pick<CustomerAddressAttribute, 'attribute_code' | 'value'>>>>, region?: Maybe<Pick<CustomerAddressRegion, 'region_code' | 'region_id' | 'region'>> }
);

type CartAddress_BillingCartAddress_Fragment = (
  Pick<BillingCartAddress, 'firstname' | 'lastname' | 'street' | 'city' | 'company' | 'postcode' | 'telephone'>
  & { region?: Maybe<Pick<CartAddressRegion, 'code' | 'region_id' | 'label'>>, country: Pick<CartAddressCountry, 'code' | 'label'> }
);

type CartAddress_ShippingCartAddress_Fragment = (
  Pick<ShippingCartAddress, 'firstname' | 'lastname' | 'street' | 'city' | 'company' | 'postcode' | 'telephone'>
  & { region?: Maybe<Pick<CartAddressRegion, 'code' | 'region_id' | 'label'>>, country: Pick<CartAddressCountry, 'code' | 'label'> }
);

export type CartAddressFragment = CartAddress_BillingCartAddress_Fragment | CartAddress_ShippingCartAddress_Fragment;

export type CartDataFragment = (
  Pick<Cart, 'id' | 'total_quantity'>
  & { applied_coupons?: Maybe<Array<Maybe<Pick<AppliedCoupon, 'code'>>>>, prices?: Maybe<{ subtotal_excluding_tax?: Maybe<Pick<Money, 'value'>>, subtotal_including_tax?: Maybe<Pick<Money, 'value'>>, applied_taxes?: Maybe<Array<Maybe<(
      Pick<CartTaxItem, 'label'>
      & { amount: Pick<Money, 'value'> }
    )>>>, discounts?: Maybe<Array<Maybe<(
      Pick<Discount, 'label'>
      & { amount: Pick<Money, 'value'> }
    )>>>, grand_total?: Maybe<Pick<Money, 'value'>> }>, items?: Maybe<Array<Maybe<CartProductData_BundleCartItem_Fragment | CartProductData_ConfigurableCartItem_Fragment | CartProductData_DownloadableCartItem_Fragment | CartProductData_SimpleCartItem_Fragment | CartProductData_VirtualCartItem_Fragment>>> }
);

type CartProductData_BundleCartItem_Fragment = (
  Pick<BundleCartItem, 'uid' | 'quantity'>
  & { product: ProductData_BundleProduct_Fragment | ProductData_ConfigurableProduct_Fragment | ProductData_DownloadableProduct_Fragment | ProductData_GroupedProduct_Fragment | ProductData_SimpleProduct_Fragment | ProductData_VirtualProduct_Fragment, prices?: Maybe<{ row_total: Pick<Money, 'value'>, row_total_including_tax: Pick<Money, 'value'>, total_item_discount?: Maybe<Pick<Money, 'value'>> }> }
);

type CartProductData_ConfigurableCartItem_Fragment = (
  Pick<ConfigurableCartItem, 'uid' | 'quantity'>
  & { product: ProductData_BundleProduct_Fragment | ProductData_ConfigurableProduct_Fragment | ProductData_DownloadableProduct_Fragment | ProductData_GroupedProduct_Fragment | ProductData_SimpleProduct_Fragment | ProductData_VirtualProduct_Fragment, prices?: Maybe<{ row_total: Pick<Money, 'value'>, row_total_including_tax: Pick<Money, 'value'>, total_item_discount?: Maybe<Pick<Money, 'value'>> }> }
);

type CartProductData_DownloadableCartItem_Fragment = (
  Pick<DownloadableCartItem, 'uid' | 'quantity'>
  & { product: ProductData_BundleProduct_Fragment | ProductData_ConfigurableProduct_Fragment | ProductData_DownloadableProduct_Fragment | ProductData_GroupedProduct_Fragment | ProductData_SimpleProduct_Fragment | ProductData_VirtualProduct_Fragment, prices?: Maybe<{ row_total: Pick<Money, 'value'>, row_total_including_tax: Pick<Money, 'value'>, total_item_discount?: Maybe<Pick<Money, 'value'>> }> }
);

type CartProductData_SimpleCartItem_Fragment = (
  Pick<SimpleCartItem, 'uid' | 'quantity'>
  & { product: ProductData_BundleProduct_Fragment | ProductData_ConfigurableProduct_Fragment | ProductData_DownloadableProduct_Fragment | ProductData_GroupedProduct_Fragment | ProductData_SimpleProduct_Fragment | ProductData_VirtualProduct_Fragment, prices?: Maybe<{ row_total: Pick<Money, 'value'>, row_total_including_tax: Pick<Money, 'value'>, total_item_discount?: Maybe<Pick<Money, 'value'>> }> }
);

type CartProductData_VirtualCartItem_Fragment = (
  Pick<VirtualCartItem, 'uid' | 'quantity'>
  & { product: ProductData_BundleProduct_Fragment | ProductData_ConfigurableProduct_Fragment | ProductData_DownloadableProduct_Fragment | ProductData_GroupedProduct_Fragment | ProductData_SimpleProduct_Fragment | ProductData_VirtualProduct_Fragment, prices?: Maybe<{ row_total: Pick<Money, 'value'>, row_total_including_tax: Pick<Money, 'value'>, total_item_discount?: Maybe<Pick<Money, 'value'>> }> }
);

export type CartProductDataFragment = CartProductData_BundleCartItem_Fragment | CartProductData_ConfigurableCartItem_Fragment | CartProductData_DownloadableCartItem_Fragment | CartProductData_SimpleCartItem_Fragment | CartProductData_VirtualCartItem_Fragment;

export type CategoryDataFragment = Pick<CategoryTree, 'image' | 'include_in_menu' | 'is_anchor' | 'level' | 'name' | 'position' | 'product_count' | 'uid'>;

export type CategoryUrlDataFragment = Pick<CategoryTree, 'url_path' | 'url_suffix'>;

export type CompleteCartDataFragment = (
  Pick<Cart, 'id' | 'email' | 'is_virtual' | 'total_quantity'>
  & { applied_coupons?: Maybe<Array<Maybe<Pick<AppliedCoupon, 'code'>>>>, prices?: Maybe<{ subtotal_excluding_tax?: Maybe<Pick<Money, 'value'>>, subtotal_including_tax?: Maybe<Pick<Money, 'value'>>, applied_taxes?: Maybe<Array<Maybe<(
      Pick<CartTaxItem, 'label'>
      & { amount: Pick<Money, 'value'> }
    )>>>, discounts?: Maybe<Array<Maybe<(
      Pick<Discount, 'label'>
      & { amount: Pick<Money, 'value'> }
    )>>>, grand_total?: Maybe<Pick<Money, 'value'>> }>, items?: Maybe<Array<Maybe<CartProductData_BundleCartItem_Fragment | CartProductData_ConfigurableCartItem_Fragment | CartProductData_DownloadableCartItem_Fragment | CartProductData_SimpleCartItem_Fragment | CartProductData_VirtualCartItem_Fragment>>>, shipping_addresses: Array<Maybe<(
    { selected_shipping_method?: Maybe<(
      Pick<SelectedShippingMethod, 'carrier_code' | 'carrier_title' | 'method_code' | 'method_title'>
      & { amount: Pick<Money, 'value' | 'currency'> }
    )> }
    & CartAddress_ShippingCartAddress_Fragment
  )>>, billing_address?: Maybe<CartAddress_BillingCartAddress_Fragment> }
);

export type ConfigurableProductOptionsDataFragment = { configurable_options?: Maybe<Array<Maybe<(
    Pick<ConfigurableProductOptions, 'attribute_code' | 'attribute_uid' | 'label' | 'position' | 'uid' | 'use_default'>
    & { values?: Maybe<Array<Maybe<(
      Pick<ConfigurableProductOptionsValues, 'label' | 'uid'>
      & { swatch_data?: Maybe<Pick<ColorSwatchData, 'value'> | Pick<ImageSwatchData, 'value'> | Pick<TextSwatchData, 'value'>> }
    )>>> }
  )>>>, variants?: Maybe<Array<Maybe<{ product?: Maybe<(
      { __typename: 'SimpleProduct' }
      & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary'>
      & ProductThumbnailData_SimpleProduct_Fragment
      & ProductPriceRangeData_SimpleProduct_Fragment
      & ProductUrlFragmentData_SimpleProduct_Fragment
    )>, attributes?: Maybe<Array<Maybe<Pick<ConfigurableAttributeOption, 'uid' | 'value_index' | 'label' | 'code'>>>> }>>> };

export type CustomerDataFragment = (
  Pick<Customer, 'email' | 'firstname' | 'is_subscribed' | 'lastname' | 'middlename' | 'prefix' | 'suffix' | 'taxvat' | 'default_billing' | 'default_shipping'>
  & { addresses?: Maybe<Array<Maybe<CustomerAddressDataFragment>>> }
);

type InvoiceItemData_BundleInvoiceItem_Fragment = (
  Pick<BundleInvoiceItem, 'id' | 'product_name' | 'product_sku' | 'quantity_invoiced'>
  & { discounts?: Maybe<Array<Maybe<(
    Pick<Discount, 'label'>
    & { amount: Pick<Money, 'currency' | 'value'> }
  )>>>, product_sale_price: Pick<Money, 'currency' | 'value'> }
);

type InvoiceItemData_DownloadableInvoiceItem_Fragment = (
  Pick<DownloadableInvoiceItem, 'id' | 'product_name' | 'product_sku' | 'quantity_invoiced'>
  & { discounts?: Maybe<Array<Maybe<(
    Pick<Discount, 'label'>
    & { amount: Pick<Money, 'currency' | 'value'> }
  )>>>, product_sale_price: Pick<Money, 'currency' | 'value'> }
);

type InvoiceItemData_InvoiceItem_Fragment = (
  Pick<InvoiceItem, 'id' | 'product_name' | 'product_sku' | 'quantity_invoiced'>
  & { discounts?: Maybe<Array<Maybe<(
    Pick<Discount, 'label'>
    & { amount: Pick<Money, 'currency' | 'value'> }
  )>>>, product_sale_price: Pick<Money, 'currency' | 'value'> }
);

export type InvoiceItemDataFragment = InvoiceItemData_BundleInvoiceItem_Fragment | InvoiceItemData_DownloadableInvoiceItem_Fragment | InvoiceItemData_InvoiceItem_Fragment;

export type InvoiceTotalDataFragment = { discounts?: Maybe<Array<Maybe<(
    Pick<Discount, 'label'>
    & { amount: Pick<Money, 'currency' | 'value'> }
  )>>>, base_grand_total: Pick<Money, 'currency' | 'value'>, shipping_handling?: Maybe<{ amount_excluding_tax?: Maybe<Pick<Money, 'currency' | 'value'>>, amount_including_tax?: Maybe<Pick<Money, 'currency' | 'value'>>, discounts?: Maybe<Array<Maybe<{ amount: Pick<Money, 'currency' | 'value'> }>>>, taxes?: Maybe<Array<Maybe<(
      Pick<TaxItem, 'rate' | 'title'>
      & { amount: Pick<Money, 'currency' | 'value'> }
    )>>>, total_amount: Pick<Money, 'currency' | 'value'> }>, subtotal: Pick<Money, 'currency' | 'value'>, taxes?: Maybe<Array<Maybe<(
    Pick<TaxItem, 'rate' | 'title'>
    & { amount: Pick<Money, 'currency' | 'value'> }
  )>>>, total_shipping: Pick<Money, 'currency' | 'value'>, total_tax: Pick<Money, 'currency' | 'value'> };

export type OrderAddressDataFragment = Pick<OrderAddress, 'city' | 'country_code' | 'firstname' | 'lastname' | 'postcode' | 'prefix' | 'region' | 'street' | 'suffix' | 'telephone'>;

type OrderItemData_BundleOrderItem_Fragment = (
  Pick<BundleOrderItem, 'id' | 'product_name' | 'product_sku' | 'product_type' | 'product_url_key' | 'quantity_canceled' | 'quantity_invoiced' | 'quantity_ordered' | 'quantity_refunded' | 'quantity_returned' | 'quantity_shipped' | 'status'>
  & { discounts?: Maybe<Array<Maybe<(
    Pick<Discount, 'label'>
    & { amount: Pick<Money, 'currency' | 'value'> }
  )>>>, entered_options?: Maybe<Array<Maybe<Pick<OrderItemOption, 'label' | 'value'>>>>, product_sale_price: Pick<Money, 'currency' | 'value'>, selected_options?: Maybe<Array<Maybe<Pick<OrderItemOption, 'label' | 'value'>>>> }
);

type OrderItemData_DownloadableOrderItem_Fragment = (
  Pick<DownloadableOrderItem, 'id' | 'product_name' | 'product_sku' | 'product_type' | 'product_url_key' | 'quantity_canceled' | 'quantity_invoiced' | 'quantity_ordered' | 'quantity_refunded' | 'quantity_returned' | 'quantity_shipped' | 'status'>
  & { discounts?: Maybe<Array<Maybe<(
    Pick<Discount, 'label'>
    & { amount: Pick<Money, 'currency' | 'value'> }
  )>>>, entered_options?: Maybe<Array<Maybe<Pick<OrderItemOption, 'label' | 'value'>>>>, product_sale_price: Pick<Money, 'currency' | 'value'>, selected_options?: Maybe<Array<Maybe<Pick<OrderItemOption, 'label' | 'value'>>>> }
);

type OrderItemData_OrderItem_Fragment = (
  Pick<OrderItem, 'id' | 'product_name' | 'product_sku' | 'product_type' | 'product_url_key' | 'quantity_canceled' | 'quantity_invoiced' | 'quantity_ordered' | 'quantity_refunded' | 'quantity_returned' | 'quantity_shipped' | 'status'>
  & { discounts?: Maybe<Array<Maybe<(
    Pick<Discount, 'label'>
    & { amount: Pick<Money, 'currency' | 'value'> }
  )>>>, entered_options?: Maybe<Array<Maybe<Pick<OrderItemOption, 'label' | 'value'>>>>, product_sale_price: Pick<Money, 'currency' | 'value'>, selected_options?: Maybe<Array<Maybe<Pick<OrderItemOption, 'label' | 'value'>>>> }
);

export type OrderItemDataFragment = OrderItemData_BundleOrderItem_Fragment | OrderItemData_DownloadableOrderItem_Fragment | OrderItemData_OrderItem_Fragment;

export type OrderTotalDataFragment = { discounts?: Maybe<Array<Maybe<(
    Pick<Discount, 'label'>
    & { amount: Pick<Money, 'currency' | 'value'> }
  )>>>, base_grand_total: Pick<Money, 'currency' | 'value'>, shipping_handling?: Maybe<{ amount_excluding_tax?: Maybe<Pick<Money, 'currency' | 'value'>>, amount_including_tax?: Maybe<Pick<Money, 'currency' | 'value'>>, discounts?: Maybe<Array<Maybe<{ amount: Pick<Money, 'currency' | 'value'> }>>>, taxes?: Maybe<Array<Maybe<(
      Pick<TaxItem, 'rate' | 'title'>
      & { amount: Pick<Money, 'currency' | 'value'> }
    )>>>, total_amount: Pick<Money, 'currency' | 'value'> }>, subtotal: Pick<Money, 'currency' | 'value'>, taxes?: Maybe<Array<Maybe<(
    Pick<TaxItem, 'rate' | 'title'>
    & { amount: Pick<Money, 'currency' | 'value'> }
  )>>>, total_shipping: Pick<Money, 'currency' | 'value'>, total_tax: Pick<Money, 'currency' | 'value'> };

type ProductCategoriesData_BundleProduct_Fragment = { categories?: Maybe<Array<Maybe<(
    Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
    & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
  )>>> };

type ProductCategoriesData_ConfigurableProduct_Fragment = { categories?: Maybe<Array<Maybe<(
    Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
    & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
  )>>> };

type ProductCategoriesData_DownloadableProduct_Fragment = { categories?: Maybe<Array<Maybe<(
    Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
    & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
  )>>> };

type ProductCategoriesData_GroupedProduct_Fragment = { categories?: Maybe<Array<Maybe<(
    Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
    & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
  )>>> };

type ProductCategoriesData_SimpleProduct_Fragment = { categories?: Maybe<Array<Maybe<(
    Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
    & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
  )>>> };

type ProductCategoriesData_VirtualProduct_Fragment = { categories?: Maybe<Array<Maybe<(
    Pick<CategoryTree, 'uid' | 'name' | 'url_suffix' | 'url_path'>
    & { breadcrumbs?: Maybe<Array<Maybe<Pick<Breadcrumb, 'category_name' | 'category_url_path'>>>> }
  )>>> };

export type ProductCategoriesDataFragment = ProductCategoriesData_BundleProduct_Fragment | ProductCategoriesData_ConfigurableProduct_Fragment | ProductCategoriesData_DownloadableProduct_Fragment | ProductCategoriesData_GroupedProduct_Fragment | ProductCategoriesData_SimpleProduct_Fragment | ProductCategoriesData_VirtualProduct_Fragment;

type ProductData_BundleProduct_Fragment = (
  { __typename: 'BundleProduct' }
  & Pick<BundleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary'>
  & ProductThumbnailData_BundleProduct_Fragment
  & ProductPriceRangeData_BundleProduct_Fragment
  & ProductUrlFragmentData_BundleProduct_Fragment
  & ProductCategoriesData_BundleProduct_Fragment
);

type ProductData_ConfigurableProduct_Fragment = (
  { __typename: 'ConfigurableProduct' }
  & Pick<ConfigurableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary'>
  & ProductThumbnailData_ConfigurableProduct_Fragment
  & ProductPriceRangeData_ConfigurableProduct_Fragment
  & ProductUrlFragmentData_ConfigurableProduct_Fragment
  & ProductCategoriesData_ConfigurableProduct_Fragment
  & ConfigurableProductOptionsDataFragment
);

type ProductData_DownloadableProduct_Fragment = (
  { __typename: 'DownloadableProduct' }
  & Pick<DownloadableProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary'>
  & ProductThumbnailData_DownloadableProduct_Fragment
  & ProductPriceRangeData_DownloadableProduct_Fragment
  & ProductUrlFragmentData_DownloadableProduct_Fragment
  & ProductCategoriesData_DownloadableProduct_Fragment
);

type ProductData_GroupedProduct_Fragment = (
  { __typename: 'GroupedProduct' }
  & Pick<GroupedProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary'>
  & ProductThumbnailData_GroupedProduct_Fragment
  & ProductPriceRangeData_GroupedProduct_Fragment
  & ProductUrlFragmentData_GroupedProduct_Fragment
  & ProductCategoriesData_GroupedProduct_Fragment
);

type ProductData_SimpleProduct_Fragment = (
  { __typename: 'SimpleProduct' }
  & Pick<SimpleProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary'>
  & ProductThumbnailData_SimpleProduct_Fragment
  & ProductPriceRangeData_SimpleProduct_Fragment
  & ProductUrlFragmentData_SimpleProduct_Fragment
  & ProductCategoriesData_SimpleProduct_Fragment
);

type ProductData_VirtualProduct_Fragment = (
  { __typename: 'VirtualProduct' }
  & Pick<VirtualProduct, 'uid' | 'sku' | 'name' | 'stock_status' | 'only_x_left_in_stock' | 'rating_summary'>
  & ProductThumbnailData_VirtualProduct_Fragment
  & ProductPriceRangeData_VirtualProduct_Fragment
  & ProductUrlFragmentData_VirtualProduct_Fragment
  & ProductCategoriesData_VirtualProduct_Fragment
);

export type ProductDataFragment = ProductData_BundleProduct_Fragment | ProductData_ConfigurableProduct_Fragment | ProductData_DownloadableProduct_Fragment | ProductData_GroupedProduct_Fragment | ProductData_SimpleProduct_Fragment | ProductData_VirtualProduct_Fragment;

type ProductGalleryData_BundleProduct_Fragment = { media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> };

type ProductGalleryData_ConfigurableProduct_Fragment = { media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> };

type ProductGalleryData_DownloadableProduct_Fragment = { media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> };

type ProductGalleryData_GroupedProduct_Fragment = { media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> };

type ProductGalleryData_SimpleProduct_Fragment = { media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> };

type ProductGalleryData_VirtualProduct_Fragment = { media_gallery?: Maybe<Array<Maybe<ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment>>> };

export type ProductGalleryDataFragment = ProductGalleryData_BundleProduct_Fragment | ProductGalleryData_ConfigurableProduct_Fragment | ProductGalleryData_DownloadableProduct_Fragment | ProductGalleryData_GroupedProduct_Fragment | ProductGalleryData_SimpleProduct_Fragment | ProductGalleryData_VirtualProduct_Fragment;

type ProductImagesData_BundleProduct_Fragment = { small_image?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment>, image?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment> };

type ProductImagesData_ConfigurableProduct_Fragment = { small_image?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment>, image?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment> };

type ProductImagesData_DownloadableProduct_Fragment = { small_image?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment>, image?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment> };

type ProductImagesData_GroupedProduct_Fragment = { small_image?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment>, image?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment> };

type ProductImagesData_SimpleProduct_Fragment = { small_image?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment>, image?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment> };

type ProductImagesData_VirtualProduct_Fragment = { small_image?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment>, image?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment> };

export type ProductImagesDataFragment = ProductImagesData_BundleProduct_Fragment | ProductImagesData_ConfigurableProduct_Fragment | ProductImagesData_DownloadableProduct_Fragment | ProductImagesData_GroupedProduct_Fragment | ProductImagesData_SimpleProduct_Fragment | ProductImagesData_VirtualProduct_Fragment;

type ProductMediaConfigurationData_ProductImage_Fragment = Pick<ProductImage, 'url' | 'position' | 'disabled' | 'label'>;

type ProductMediaConfigurationData_ProductVideo_Fragment = Pick<ProductVideo, 'url' | 'position' | 'disabled' | 'label'>;

export type ProductMediaConfigurationDataFragment = ProductMediaConfigurationData_ProductImage_Fragment | ProductMediaConfigurationData_ProductVideo_Fragment;

type ProductPriceRangeData_BundleProduct_Fragment = { price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } } };

type ProductPriceRangeData_ConfigurableProduct_Fragment = { price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } } };

type ProductPriceRangeData_DownloadableProduct_Fragment = { price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } } };

type ProductPriceRangeData_GroupedProduct_Fragment = { price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } } };

type ProductPriceRangeData_SimpleProduct_Fragment = { price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } } };

type ProductPriceRangeData_VirtualProduct_Fragment = { price_range: { minimum_price: { final_price: Pick<Money, 'currency' | 'value'>, regular_price: Pick<Money, 'currency' | 'value'> } } };

export type ProductPriceRangeDataFragment = ProductPriceRangeData_BundleProduct_Fragment | ProductPriceRangeData_ConfigurableProduct_Fragment | ProductPriceRangeData_DownloadableProduct_Fragment | ProductPriceRangeData_GroupedProduct_Fragment | ProductPriceRangeData_SimpleProduct_Fragment | ProductPriceRangeData_VirtualProduct_Fragment;

type ProductPriceTierData_BundleProduct_Fragment = { price_tiers?: Maybe<Array<Maybe<(
    Pick<TierPrice, 'quantity'>
    & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
  )>>> };

type ProductPriceTierData_ConfigurableProduct_Fragment = { price_tiers?: Maybe<Array<Maybe<(
    Pick<TierPrice, 'quantity'>
    & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
  )>>> };

type ProductPriceTierData_DownloadableProduct_Fragment = { price_tiers?: Maybe<Array<Maybe<(
    Pick<TierPrice, 'quantity'>
    & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
  )>>> };

type ProductPriceTierData_GroupedProduct_Fragment = { price_tiers?: Maybe<Array<Maybe<(
    Pick<TierPrice, 'quantity'>
    & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
  )>>> };

type ProductPriceTierData_SimpleProduct_Fragment = { price_tiers?: Maybe<Array<Maybe<(
    Pick<TierPrice, 'quantity'>
    & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
  )>>> };

type ProductPriceTierData_VirtualProduct_Fragment = { price_tiers?: Maybe<Array<Maybe<(
    Pick<TierPrice, 'quantity'>
    & { discount?: Maybe<Pick<ProductDiscount, 'amount_off' | 'percent_off'>>, final_price?: Maybe<Pick<Money, 'currency' | 'value'>> }
  )>>> };

export type ProductPriceTierDataFragment = ProductPriceTierData_BundleProduct_Fragment | ProductPriceTierData_ConfigurableProduct_Fragment | ProductPriceTierData_DownloadableProduct_Fragment | ProductPriceTierData_GroupedProduct_Fragment | ProductPriceTierData_SimpleProduct_Fragment | ProductPriceTierData_VirtualProduct_Fragment;

type ProductThumbnailData_BundleProduct_Fragment = { thumbnail?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment> };

type ProductThumbnailData_ConfigurableProduct_Fragment = { thumbnail?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment> };

type ProductThumbnailData_DownloadableProduct_Fragment = { thumbnail?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment> };

type ProductThumbnailData_GroupedProduct_Fragment = { thumbnail?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment> };

type ProductThumbnailData_SimpleProduct_Fragment = { thumbnail?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment> };

type ProductThumbnailData_VirtualProduct_Fragment = { thumbnail?: Maybe<ProductMediaConfigurationData_ProductImage_Fragment> };

export type ProductThumbnailDataFragment = ProductThumbnailData_BundleProduct_Fragment | ProductThumbnailData_ConfigurableProduct_Fragment | ProductThumbnailData_DownloadableProduct_Fragment | ProductThumbnailData_GroupedProduct_Fragment | ProductThumbnailData_SimpleProduct_Fragment | ProductThumbnailData_VirtualProduct_Fragment;

type ProductUrlFragmentData_BundleProduct_Fragment = (
  Pick<BundleProduct, 'url_key'>
  & { url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>> }
);

type ProductUrlFragmentData_ConfigurableProduct_Fragment = (
  Pick<ConfigurableProduct, 'url_key'>
  & { url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>> }
);

type ProductUrlFragmentData_DownloadableProduct_Fragment = (
  Pick<DownloadableProduct, 'url_key'>
  & { url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>> }
);

type ProductUrlFragmentData_GroupedProduct_Fragment = (
  Pick<GroupedProduct, 'url_key'>
  & { url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>> }
);

type ProductUrlFragmentData_SimpleProduct_Fragment = (
  Pick<SimpleProduct, 'url_key'>
  & { url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>> }
);

type ProductUrlFragmentData_VirtualProduct_Fragment = (
  Pick<VirtualProduct, 'url_key'>
  & { url_rewrites?: Maybe<Array<Maybe<Pick<UrlRewrite, 'url'>>>> }
);

export type ProductUrlFragmentDataFragment = ProductUrlFragmentData_BundleProduct_Fragment | ProductUrlFragmentData_ConfigurableProduct_Fragment | ProductUrlFragmentData_DownloadableProduct_Fragment | ProductUrlFragmentData_GroupedProduct_Fragment | ProductUrlFragmentData_SimpleProduct_Fragment | ProductUrlFragmentData_VirtualProduct_Fragment;

type ShipmentItemData_BundleShipmentItem_Fragment = (
  Pick<BundleShipmentItem, 'id' | 'product_name' | 'product_sku' | 'quantity_shipped'>
  & { product_sale_price: Pick<Money, 'currency' | 'value'> }
);

type ShipmentItemData_ShipmentItem_Fragment = (
  Pick<ShipmentItem, 'id' | 'product_name' | 'product_sku' | 'quantity_shipped'>
  & { product_sale_price: Pick<Money, 'currency' | 'value'> }
);

export type ShipmentItemDataFragment = ShipmentItemData_BundleShipmentItem_Fragment | ShipmentItemData_ShipmentItem_Fragment;
