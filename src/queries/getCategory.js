/** @noflow */
import { gql } from '@apollo/client';

export const GET_CATEGORY = gql`
    query category(
        $id: Int!
        $pageSize: Int!
        $currentPage: Int!
        $filters: ProductAttributeFilterInput!
        $sort: ProductAttributeSortInput
    ) {
        category(id: $id) {
            id
            description
            name
            product_count
        }
        products(
            pageSize: $pageSize
            currentPage: $currentPage
            filter: $filters
            sort: $sort
        ) {
            items {
                # Once graphql-ce/1027 is resolved, use a ProductDetails fragment here instead.
                __typename
                description {
                    html
                }
                id
                media_gallery_entries {
                    id
                    label
                    position
                    disabled
                    file
                }
                name
                price {
                    regularPrice {
                        amount {
                            currency
                            value
                        }
                    }
                }
                sku
                small_image {
                    url
                }
                url_key
                ... on ConfigurableProduct {
                    configurable_options {
                        attribute_code
                        attribute_id
                        id
                        label
                        values {
                            default_label
                            label
                            store_label
                            use_default_value
                            value_index
                        }
                    }
                    variants {
                        attributes {
                            code
                            value_index
                        }
                        product {
                            id
                            media_gallery_entries {
                                id
                                disabled
                                file
                                label
                                position
                            }
                            sku
                            stock_status
                        }
                    }
                }
            }
            page_info {
                total_pages
            }
            total_count
        }
    }
`;
