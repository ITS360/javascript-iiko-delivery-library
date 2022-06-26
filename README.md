# iiko Delivery Library

## Methods

### getOrganisations();

For results refer to [iiko documentation](https://api-eu.iiko.services/#tag/Organizations/paths/~1api~11~1organizations/post)

### getNomenclature(organisationId);

organisationId can retrieved from getOrganisations method

For results refer to [iiko documentation](https://api-eu.iiko.services/#tag/Menu/paths/~1api~11~1nomenclature/post)

### getPaymentMethods(organisationIds);

organisationIds can retrieved from getOrganisations method

For results refer to [iiko documentation](https://api-eu.iiko.services/#tag/Dictionaries/paths/~1api~11~1payment_types/post)

### getTerminalGroups(organisationIds);

organisationIds can retrieved from getOrganisations method

For results refer to [iiko documentation](https://api-eu.iiko.services/#tag/Terminal-groups/paths/~1api~11~1terminal_groups/post)

### getDeliveryOrderTypes(organisationIds);

organisationIds can retrieved from getOrganisations method

For results refer to [iiko documentation](https://api-eu.iiko.services/#tag/Dictionaries/paths/~1api~11~1deliveries~1order_types/post)


### getDeliveryCities(organisationIds);

organisationIds can retrieved from getOrganisations method

For results refer to [iiko documentation](https://api-eu.iiko.services/#tag/Addresses/paths/~1api~11~1cities/post)


### getDeliveryStreets(organisationId, cityId);

organisationId can retrieved from getOrganisations method
cityId can be retrieved by getDeliveryCities method

For results refer to [iiko documentation](https://api-eu.iiko.services/#tag/Addresses/paths/~1api~11~1streets~1by_city/post)


### deliveriesCreate(delivery);

for delivery object and result please reffer to [iiko documentation](https://api-eu.iiko.services/#tag/Deliveries:-Create-and-update/paths/~1api~11~1deliveries~1create/post)

### getDelivery(organisationId, orderId);

organisationId can retrieved from getOrganisations method
orderId can be found in result of deliveriesCreate method

For results refer to [iiko documentation](https://api-eu.iiko.services/#tag/Deliveries:-Retrieve/paths/~1api~11~1deliveries~1by_id/post)

Provided by [ITS360](https://its360.lt/)
