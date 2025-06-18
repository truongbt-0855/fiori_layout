sap.ui.define(
    ["sap/suite/ui/generic/template/lib/AppComponent"],
    function (Component) {
        "use strict";

        return Component.extend("genereator.Component", {
            metadata: {
                interfaces: ["sap.ui.core.IAsyncContentCreation"],
                manifest: "json"
            }
        });
    }
);