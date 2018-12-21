/* Platform selector functions */

var resetHeaderBlueBackgroundStyles = function() {
    document.querySelector('#blueBackground').classList.remove('emailShowed');
    document.querySelector('#blueBackground').classList.remove('paymentShowed');
    document.querySelector('#blueBackground').classList.remove('thankyouShowed');
};

var resetAllActive = function(section) {

    var MetatraderTriggerId = '#' + section + 'MetatraderTrigger';
    var NinjaTraderTriggerId = '#' + section + 'NinjaTraderTrigger';
    var CtraderTriggerId = '#' + section + 'CtraderTrigger';

    var MetatraderTriggerObj = document.querySelector(MetatraderTriggerId);
    var NinjaTraderTriggerObj = document.querySelector(NinjaTraderTriggerId);
    var CtraderTriggerObj = document.querySelector(CtraderTriggerId);

    MetatraderTriggerObj.classList.remove('active');
    NinjaTraderTriggerObj.classList.remove('active');
    CtraderTriggerObj.classList.remove('active');

};

var addActive = function(platformName, section) {
    resetAllActive(section);
    var sectionPlatformNameID = "#" + section + platformName + 'Trigger';
    var sectionPlatformNameObj = document.querySelector(sectionPlatformNameID);
    sectionPlatformNameObj.classList.add('active');
};

var showEmailLead = function(platformName, section) {
    document.querySelector('#' + section + 'Payment').classList.add('hidden');
    document.querySelector('#' + section + 'ThankYou').classList.add('hidden');
    document.querySelector('#' + section + 'SendEmail').classList.remove('hidden');
    document.querySelector('#' + section + 'Platform').value = platformName;
    if (section == "header") {
        resetHeaderBlueBackgroundStyles();
        document.querySelector('#blueBackground').classList.add('emailShowed');
    }
    addActive(platformName, section);
};

var showPaymentLink = function(section) {
    document.querySelector('#' + section + 'ThankYou').classList.add('hidden');
    document.querySelector('#' + section + 'SendEmail').classList.add('hidden');
    document.querySelector('#' + section + 'Payment').classList.remove('hidden');
    if (section == "header") {
        resetHeaderBlueBackgroundStyles();
        document.querySelector('#blueBackground').classList.add('paymentShowed');
    }
    addActive('Ctrader', section);
};

var thankYou = function(section) {
    var thankyouId = '#' + section + 'ThankYou';
    var formId = '#' + section + 'SendEmail';
    var thankyouObj = document.querySelector(thankyouId);
    var formObj = document.querySelector(thankyouObj);
    thankyouObj.classList.remove('hidden');
    formObj.classList.add('hidden');
    document.onclick = function() {
        thankyouObj.classList.add('hidden');
    };
    if (section == "header") {
        resetHeaderBlueBackgroundStyles();
        document.querySelector('#blueBackground').classList.add('thankyouShowed');
    };
};

var toggleHomeText = function() {
    document.querySelector('#platformHeader').classList.toggle('hidden');
    document.querySelector('#homeText').classList.toggle('opened');
};

var toggleText = function() {
    document.querySelector('#platformText').classList.toggle('hidden');
    document.querySelector('#about').classList.toggle('opened');
    document.querySelector('#textCTA').classList.toggle('opened');
};

var togglePortfolio = function() {
    document.querySelector('#platformPortfolio').classList.toggle('hidden');
    document.querySelector('#portfolio').classList.toggle('opened');
    document.querySelector('#portfolioCTA').classList.toggle('opened');

}