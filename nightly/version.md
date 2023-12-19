commit 02ea9a451635b9b0d75833889e7cdf3c022cd137
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Mon Dec 18 21:18:12 2023 +0200

    feat(ui5-select): introduce `readonly` state (#7950)
    
    Introduces readonly state to the Select web component and align the readonly styles for all input fields to the latest specs. Changes in Select API: new property readonly; VD: respective visual styling for readonly state, dropdown icon is not displayed; InteractionDesign: dropdown remains always closed, no changes in selection allowed; a11y: new aria attribute aria-readonly true|false accordingly.
    
    Fixes: #7727
