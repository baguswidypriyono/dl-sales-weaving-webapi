 var basicTest = require("../../basic-test-factory");
 basicTest({
     uri: "/sales-contracts",
     model: require("dl-models").sales.WeavingSalesContract,
     validate: require("dl-models").validator.sales.weavingSalesContract,
     util: require("dl-module").test.data.sales.weavingSalesContract,
     keyword: null
 });