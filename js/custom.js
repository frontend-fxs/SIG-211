/* Global variables */
var platformName = "";
var userEmail = "";

/* Platform selector functions */

var resetHeaderBlueBackgroundStyles = function() {
    document.querySelector('#blueBackground').classList.remove('emailShowed');
    document.querySelector('#blueBackground').classList.remove('paymentShowed');
    document.querySelector('#blueBackground').classList.remove('thankyouShowed');
};

var resetAllActive = function(section) {

    var MetatraderTriggerId = '#' + section + 'MetatraderTrigger';
    var NinjatraderTriggerId = '#' + section + 'NinjatraderTrigger';
    var CtraderTriggerId = '#' + section + 'CtraderTrigger';

    var MetatraderTriggerObj = document.querySelector(MetatraderTriggerId);
    var NinjatraderTriggerObj = document.querySelector(NinjatraderTriggerId);
    var CtraderTriggerObj = document.querySelector(CtraderTriggerId);

    MetatraderTriggerObj.classList.remove('active');
    NinjatraderTriggerObj.classList.remove('active');
    CtraderTriggerObj.classList.remove('active');

};

var addActive = function(platformName, section) {
    resetAllActive(section);
    var sectionPlatformNameID = "#" + section + platformName + 'Trigger';
    var sectionPlatformNameObj = document.querySelector(sectionPlatformNameID);
    sectionPlatformNameObj.classList.add('active');
};

var showEmailLead = function(platformNameP, section) {
    document.querySelector('#' + section + 'Payment').classList.add('hidden');
    document.querySelector('#' + section + 'ThankYou').classList.add('hidden');
    document.querySelector('#' + section + 'SendEmail').classList.remove('hidden');
    document.querySelector('#' + section + 'Platform').value = platformNameP;
    platformName = platformNameP;
    if (section === "header") {
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

var updateForm = function(Id) {
    userEmail = document.querySelector('#' + Id).value;
};

var sendEmailLead = function() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://externalservices.fxstreet.com/api/Email/send",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "Postman-Token": "124588f3-5a54-4c83-aaba-a36aba2590e4"
        },
        "data": {
            "From": "signals@fxstreet.com",
            "To": userEmail,
            "Body": "",
            "TemplateName": platformName,
            "Subject": "Thanks for your interest in the FXstreet Market Impact Signals app"
        }
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
};

var thankYou = function(section) {
    sendEmailLead();
    var thankyouId = '#' + section + 'ThankYou';
    var formId = '#' + section + 'SendEmail';
    var thankyouObj = document.querySelector(thankyouId);
    var formObj = document.querySelector(formId);
    thankyouObj.classList.remove('hidden');
    formObj.classList.add('hidden');
    document.onclick = function() {
        thankyouObj.classList.add('hidden');
    };
    if (section === "header") {
        resetHeaderBlueBackgroundStyles();
        document.querySelector('#blueBackground').classList.add('thankyouShowed');
    }
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

};