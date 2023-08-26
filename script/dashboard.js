//button section
const homePageBtn = document.querySelector(".Home-page-btn");
const balancePageBtn = document.querySelector(".Balance-page-btn");
const accountPageBtn = document.querySelector(".Accrec-page-btn");
const invoicePageBtn = document.querySelector(".invoice-page-btn");
const transactionPageBtn = document.querySelector(".transaction-page-btn");
const beneficiariesPageBtn = document.querySelector(".beneficiaries-page-btn");
const ReferralPageBtn = document.querySelector(".referral-page-btn");
const ProfilePageBtn = document.querySelector(".profile-page-btn");
const VirtualPageBtn = document.querySelector(".virtual-page-btn");
const createInvoiceBtn = document.querySelector(".createinvoicebtn");
const createInvoiceBtn2 = document.querySelector(".form-inv");
//Start Home Section
const sendGreyBtn = document.querySelector(".send_money");
const DisplayForeignBox = document.querySelector(".create_foreign_acc");
const sendGreyBox = document.querySelector(".p2p");
const GobackBtnP2p = document.querySelector(".go_back_left");
const exitP2p = document.querySelector(".Exit_p2p_right");
const exitP2pDesktop = document.querySelector(".exit_btn_p2p");
const sendCashBtn = document.querySelector(".send_cash_btn");
const sendCashBox = document.querySelector(".send_cash_box");
const exitCashMobile = document.querySelector(".Exit_cash_right");
const cancelP2pBtn = document.querySelector(".back_btn");
// const proceedP2pBtn = document.querySelector(".for_btn");
const displaySendP2p = document.querySelector(".display_send_p2p");
const cashExitDesktop = document.querySelector(".exit_btn_cash");

const overlayP2p = document.querySelector(".overlay_p2p");
const overlayCash = document.querySelector(".overlay_cash");
const overlayBene = document.querySelector(".overlay_bene");
const overlayRec = document.querySelector(".overlayRecipient");
const overlaydeposit = document.querySelector(".overlayDeposit");
const overlayswap = document.querySelector(".overlaySwap");
const overlayAddRecipient = document.querySelector(".overlayaddrecipient");

//End overlay
const savedBeneBtn = document.querySelector(".sends_funds_two");
const savedBeneBox = document.querySelector(".save_beneficiaries");
const goBackToCashSec = document.querySelector(".go_back_left_bene");
const exitBeneMobile = document.querySelector(".Exit_bene_right");
const exitBeneDesktop = document.querySelector(".exit_btn_bene");

const savedRecipientBtn = document.querySelector(".sends_funds_three");
const savedRecipientBox = document.querySelector(".New_recipient");
const goBackToCashSecRec = document.querySelector(".go_back_left_recipient");
const exitRecipientMobile = document.querySelector(".Exit_recipient_right");
const exitRecipientDesktop = document.querySelector(".exit_btn_recipient");
const cancelRecipientBtn = document.querySelector(".back_btn_recipient");
// const proceedRecipientBtn = document.querySelector(".for_btn_recipient");

//  End Home Section
//Start Balance section
const usdPageBtn = document.querySelector(".usdcard");
const gbpPageBtn = document.querySelector(".gbpcard");
const euroPageBtn = document.querySelector(".eurocard");

const currencyChangeBtn = document.querySelector(".chg");
const currencyChangeBtntwo = document.querySelector(".chg2");
const currencyChangeBtnthree = document.querySelector(".chg3");
const currencyChangeBtnFour = document.querySelector(".chg4");
const currencyChangeBtnFive = document.querySelector(".chg5");
const balSecLine1 = document.querySelector(".bal-title1");
const balSecLine2 = document.querySelector(".bal-title2");
const balSecLine3 = document.querySelector(".bal-title3");
const balanceLine = document.querySelectorAll(".country");
const balDepositBtn = document.querySelector(".deposit_btn_balance");
const balSendBtn = document.querySelector(".send_btn");
const balSwapBtn = document.querySelector(".swap_btn");
const DisplaybalDepositBtn = document.querySelector(".Deposit_top_up_funds");
const exitDepositMobile = document.querySelector(".Exit_top_up_right");
const exitDepositDesktop = document.querySelector(".exit_btn_top_up");
const cancelTopUpBtn = document.querySelector(".back_btn_top_up");

const DisplaybalSwap = document.querySelector(".swap_funds");
const exitSwapMobile = document.querySelector(".Exit_swap_right");
const exitSwapDesktop = document.querySelector(".exit_btn_swap");
const cancelSwapBtn = document.querySelector(".back_btn_swap");
//End balance

//beneficiaries
const AddNewRecipientBtn = document.querySelector(".benefit-btn");
const exitAddRecipientMobile = document.querySelector(
  ".Exit_add_recipient_right"
);
const exitAddRecipientDesktop = document.querySelector(
  ".exit_btn_add_recipient"
);
const cancelAddRecipientBtn = document.querySelector(".back_btn_add_recipient");
const displayNewRecipient = document.querySelector(".add_recipient");

//Start account

const euroFormBtn = document.querySelector(".openeuroform");
const usdFormBtn = document.querySelector(".openusdform");
const GbpFormBtn = document.querySelector(".opengbpform");
const requestAccForm = document.querySelector(".acc_form");
const overlayacc = document.querySelector(".overlayacc");
const AccExitbtn = document.querySelector(".acc_exit");
const AccExitCancel = document.querySelector(".exit_btn");
const foreignChanges1 = document.querySelector(".acc_chg");
const foreignChanges2 = document.querySelector(".acc_chg1");
const foreignChanges3 = document.querySelector(".acc_chg2");
//End account
const tabline = document.querySelectorAll(".tab-title");
const invoiceLine = document.querySelectorAll(".invoice-title");
const BenefitLine = document.querySelectorAll(".benefit-title");
const ProfileLine = document.querySelectorAll(".profile-title");

const MB = document.querySelectorAll(".MB");
const toggleBtn = document.querySelector(".menu");
const toggleBtnIcon = document.querySelector(".menu i");
const dropDown1 = document.querySelector(".fixed-dropdown");
const dropDown2 = document.querySelector(".dropdownmenu");
const dropWithdrawlTail = document.querySelector(".withdrawal_form_tail");
const dropWithdrawalBtn = document.querySelector(".withdwal_btn");
const dropWithdrawalBtnIcon = document.querySelector(".withdwal_btn i");
const withdrawalBody = document.querySelector(".withdrawal_form");

const dropDepositTail = document.querySelector(".deposit_form_tail");
const dropDepositBtn = document.querySelector(".deposit_btn");
const dropDepositBtnIcon = document.querySelector(".deposit_btn i");
const depositBody = document.querySelector(".deposit_form");
//dropmenu btn
const dropHomePageBtn = document.querySelector(".drop-Home-page-btn");
const dropBalancePageBtn = document.querySelector(".drop-Balance-page-btn");
const dropAccountPageBtn = document.querySelector(".drop-Accrec-page-btn");
const dropInvoicePageBtn = document.querySelector(".drop-invoice-page-btn");
const dropTransactionPageBtn = document.querySelector(
  ".drop-transaction-page-btn"
);
const dropBeneficiariesPageBtn = document.querySelector(
  ".drop-beneficiaries-page-btn"
);
const dropReferralPageBtn = document.querySelector(".drop-referral-page-btn");
const dropProfilePageBtn = document.querySelector(".drop-profile-page-btn");
const dropVirtualPageBtn = document.querySelector(".drop-virtual-page-btn");
//mini btn
const foreignbtn = document.querySelector(".btn1");
const requestbtn = document.querySelector(".btn2");
const invoiceBtn = document.querySelector(".btn3");
const customerBtn = document.querySelector(".btn4");
const requestBenefitBtn = document.querySelector(".btn5");
const cardBtn = document.querySelector(".btn6");
const BasicInfoBtn = document.querySelector(".btn7");
const NotisSetBtn = document.querySelector(".btn8");
const securityBtn = document.querySelector(".btn9");
const LimitBtn = document.querySelector(".btn10");
// mini Page section
const foreignPage = document.querySelector(".tab-list");
const requestPage = document.querySelector(".RA");
const invoiceCustomers = document.querySelector(".invoice-customers");
const invoicebh1 = document.querySelector(".invoice-btn");
const invoicebh2 = document.querySelector(".invoices-rec");
const nameChanging = document.querySelector(".Name-change");
const requestBenefitPage = document.querySelector(".benefit-main");
const cardPage = document.querySelector(".benefit-cards");
const basicInfoPage = document.querySelector(".profile-main");
const NotisPage = document.querySelector(".profile_NS");
const securityPage = document.querySelector(".profile_SEC");
const limitPage = document.querySelector(".profile_LT");
//Page section
const homePage = document.querySelector(".Body2 ");
const balancePage = document.querySelector(".Body3");
const accountPage = document.querySelector(".body4");
const invoicePage = document.querySelector(".body5");
const transactionPage = document.querySelector(".body6");
const BeneficiariesPage = document.querySelector(".body7");
const ReferralPage = document.querySelector(".body8");
const ProfilePage = document.querySelector(".body9");
const VirtualPage = document.querySelector(".body10");
const createinvoicepage = document.querySelector(".body11");
const copyBtn = document.querySelector(".copy_btn");
//create invoice
 const showAddBtn = document.querySelector('.show-add')
 const showAddBtnContent = document.querySelector('.showorhideclass')

function showElement(element) {
  element.classList.remove("hide");
}
function hideElement(element) {
  element.classList.add("hide");
}
//function to navigate through pages
function navigateToPage(page, name) {
  const pages = [
    homePage,
    balancePage,
    accountPage,
    invoicePage,
    transactionPage,
    BeneficiariesPage,
    ReferralPage,
    ProfilePage,
    VirtualPage,
    createinvoicepage,
  ];
  pages.forEach((p) => {
    if (p === page) {
      p.classList.remove("hidden");
    } else {
      p.classList.add("hidden");
    }
  });
  nameChanging.innerHTML = name;
}

function handleBalance(currency) {
  currencyChangeBtn.textContent = currency;
  currencyChangeBtntwo.textContent = currency;
  currencyChangeBtnthree.textContent = currency;
  currencyChangeBtnFour.textContent = currency;
  currencyChangeBtnFive.textContent = currency;
}
function handleforeignword(foreignword) {
  foreignChanges1.textContent = foreignword;
  foreignChanges2.textContent = foreignword;
  foreignChanges3.textContent = foreignword;
}

invoicebh1.classList.remove("hide");
invoicebh2.classList.remove("hide");
foreignPage.classList.remove("hide");
requestBenefitPage.classList.remove("hide");
homePage.classList.remove("hidden");
basicInfoPage.classList.remove("hide");

invoiceBtn.addEventListener("click", () => {
  showElement(invoicebh1);
  showElement(invoicebh2);
  hideElement(invoiceCustomers);
});
customerBtn.addEventListener("click", () => {
  hideElement(invoicebh1);
  hideElement(invoicebh2);
  showElement(invoiceCustomers);
});
foreignbtn.addEventListener("click", () => {
  showElement(foreignPage);
  hideElement(requestPage);
});
requestbtn.addEventListener("click", () => {
  hideElement(foreignPage);
  showElement(requestPage);
});
requestBenefitBtn.addEventListener("click", () => {
  showElement(requestBenefitPage);
  hideElement(cardPage);
});
cardBtn.addEventListener("click", () => {
  hideElement(requestBenefitPage);
  showElement(cardPage);
});
BasicInfoBtn.addEventListener("click", () => {
  showElement(basicInfoPage);
  hideElement(NotisPage);
  hideElement(securityPage);
  hideElement(limitPage);
});
NotisSetBtn.addEventListener("click", () => {
  hideElement(basicInfoPage);
  showElement(NotisPage);
  hideElement(securityPage);
  hideElement(limitPage);
});
securityBtn.addEventListener("click", () => {
  hideElement(basicInfoPage);
  hideElement(NotisPage);
  showElement(securityPage);
  hideElement(limitPage);
});
LimitBtn.addEventListener("click", () => {
  hideElement(basicInfoPage);
  hideElement(NotisPage);
  hideElement(securityPage);
  showElement(limitPage);
});

homePageBtn.addEventListener("click", (event) => {
  event.preventDefault();
  navigateToPage(
    homePage,
    "<h1 class='Name-change'><span>Welcome,</span> Obazee!👋</h1>"
  );
});
balancePageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(balancePage, "Balance");
});
accountPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(accountPage, "account");
});
invoicePageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(invoicePage, "invoice");
});
transactionPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(transactionPage, "Transaction");
});
beneficiariesPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(BeneficiariesPage, "Beneficiaries");
});
ReferralPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(ReferralPage, "refferal");
});
ProfilePageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(ProfilePage, "profile");
});
VirtualPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(VirtualPage, "Virtual Card");
});
createInvoiceBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(createinvoicepage, "Create invoice page");
});
createInvoiceBtn2.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(createinvoicepage, "Create invoice page");
});
//balance btn

usdPageBtn.addEventListener("click", function () {
  navigateToPage(balancePage, "Balance");
  handleBalance("USD");
});
gbpPageBtn.addEventListener("click", function () {
  navigateToPage(balancePage, "Balance");
  handleBalance("GBP");
});
euroPageBtn.addEventListener("click", function () {
  navigateToPage(balancePage, "Balance");
  handleBalance("EURO");
});

balSecLine1.addEventListener("click", function () {
  handleBalance("USD");
});
balSecLine2.addEventListener("click", function () {
  handleBalance("EURO");
});
balSecLine3.addEventListener("click", function () {
  handleBalance("GBP");
});

//Home section
DisplayForeignBox.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(accountPage, "Account");
});
sendGreyBtn.addEventListener("click", (event) => {
  event.preventDefault();
  showElement(sendGreyBox);
  showElement(overlayP2p);
});
overlayP2p.addEventListener("click", () => {
  hideElement(sendGreyBox);
  hideElement(overlayP2p);
});

GobackBtnP2p.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(sendGreyBox);
  hideElement(overlayP2p);
});
exitP2p.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(sendGreyBox);
  hideElement(overlayP2p);
});
exitP2pDesktop.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(sendGreyBox);
  hideElement(overlayP2p);
});
cancelP2pBtn.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(sendGreyBox);
  hideElement(overlayP2p);
});

displaySendP2p.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(sendCashBox);
  showElement(overlayP2p);
  showElement(sendGreyBox);
});

sendCashBtn.addEventListener("click", (event) => {
  event.preventDefault();
  showElement(sendCashBox);
  showElement(overlayCash);
});
exitCashMobile.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(sendCashBox);
  hideElement(overlayCash);
});
cashExitDesktop.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(sendCashBox);
  hideElement(overlayCash);
});
overlayCash.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(sendCashBox);
  hideElement(overlayCash);
});
savedBeneBtn.addEventListener("click", (event) => {
  event.preventDefault();
  showElement(savedBeneBox);
  showElement(overlayBene);
  hideElement(sendCashBox);
});
goBackToCashSec.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(savedBeneBox);
  hideElement(overlayBene);
  showElement(sendCashBox);
  showElement(overlayCash);
});
exitBeneDesktop.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(savedBeneBox);
  hideElement(overlayBene);
});
exitBeneMobile.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(savedBeneBox);
  hideElement(overlayBene);
});
overlayBene.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(overlayBene);
  hideElement(savedBeneBox);
});

savedRecipientBtn.addEventListener("click", () => {
  hideElement(sendCashBox);
  hideElement(overlayCash);
  showElement(savedRecipientBox);
  showElement(overlayRec);
});
overlayRec.addEventListener("click", () => {
  hideElement(overlayRec);
  hideElement(savedRecipientBox);
});
goBackToCashSecRec.addEventListener("click", () => {
  hideElement(savedRecipientBox);
  showElement(sendCashBox);
});

cancelRecipientBtn.addEventListener("click", () => {
  hideElement(savedRecipientBox);
  hideElement(overlayRec);
});
exitRecipientDesktop.addEventListener("click", () => {
  hideElement(savedRecipientBox);
  hideElement(overlayRec);
  hideElement(sendCashBox);
});
exitRecipientMobile.addEventListener("click", () => {
  hideElement(savedRecipientBox);
  hideElement(overlayRec);
});

//account Section
euroFormBtn.addEventListener("click", function () {
  showElement(requestAccForm);
  showElement(overlayacc);
  handleforeignword("EUR");
});
usdFormBtn.addEventListener("click", () => {
  showElement(requestAccForm);
  showElement(overlayacc);
  handleforeignword("USD");
});
GbpFormBtn.addEventListener("click", () => {
  showElement(requestAccForm);
  showElement(overlayacc);
  handleforeignword("GBP");
});
AccExitbtn.addEventListener("click", function () {
  hideElement(requestAccForm);
  hideElement(overlayacc);
});
AccExitCancel.addEventListener("click", function () {
  hideElement(requestAccForm);
  hideElement(overlayacc);
});
overlayacc.addEventListener("click", function () {
  hideElement(requestAccForm);
  hideElement(overlayacc);
});

//Balnce Section
balSendBtn.addEventListener("click", (event) => {
  event.preventDefault();
  showElement(sendCashBox);
});
balDepositBtn.addEventListener("click", (event) => {
  event.preventDefault();
  showElement(DisplaybalDepositBtn);
  showElement(overlaydeposit);
});

exitDepositDesktop.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(DisplaybalDepositBtn);
  hideElement(overlaydeposit);
});
exitDepositMobile.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(DisplaybalDepositBtn);
  hideElement(overlaydeposit);
});
cancelTopUpBtn.addEventListener("click", () => {
  hideElement(DisplaybalDepositBtn);
  hideElement(overlaydeposit);
});

balSwapBtn.addEventListener("click", (event) => {
  event.preventDefault();
  showElement(DisplaybalSwap);
  showElement(overlayswap);
});

exitSwapDesktop.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(DisplaybalSwap);
  hideElement(overlayswap);
});
exitSwapMobile.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(DisplaybalSwap);
  hideElement(overlayswap);
});
cancelSwapBtn.addEventListener("click", () => {
  hideElement(DisplaybalSwap);
  hideElement(overlayswap);
});
overlayswap.addEventListener("click", () => {
  hideElement(DisplaybalSwap);
  hideElement(overlayswap);
});

//beneficiaries
AddNewRecipientBtn.addEventListener("click", (event) => {
  event.preventDefault();
  showElement(displayNewRecipient);
  showElement(overlayAddRecipient);
});

exitAddRecipientDesktop.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(displayNewRecipient);
  hideElement(overlayAddRecipient);
});
exitAddRecipientMobile.addEventListener("click", (event) => {
  event.preventDefault();
  hideElement(displayNewRecipient);
  hideElement(overlayAddRecipient);
});
cancelAddRecipientBtn.addEventListener("click", () => {
  hideElement(displayNewRecipient);
  hideElement(overlayAddRecipient);
});
overlayAddRecipient.addEventListener("click", () => {
  hideElement(displayNewRecipient);
  hideElement(overlayAddRecipient);
});

//drop-menu
dropHomePageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(
    homePage,
    "<h1 class='Name-change'><span>Welcome,</span> Obazee!👋</h1>"
  );
});
dropBalancePageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(balancePage, "Balance");
});
dropAccountPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(accountPage, "account");
});
dropInvoicePageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(invoicePage, "invoice");
});
dropTransactionPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(transactionPage, "Transaction");
});
dropBeneficiariesPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(BeneficiariesPage, "Beneficiaries");
});
dropReferralPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(ReferralPage, "refferal");
});
dropProfilePageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(ProfilePage, "profile");
});
dropVirtualPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navigateToPage(VirtualPage, "Virtual Card");
});

showAddBtn.addEventListener('click', () => {
  showAddBtnContent.classList.toggle('hide')
  if(showAddBtn.textContent === 'Show additional detail'){
    showAddBtn.textContent = 'Hide additional detail'
  }
  else{
     showAddBtn.textContent = 'Show additional detail'
  }
})

//Tab line
tabline.forEach((item) => {
  item.addEventListener("click", function () {
    tabline.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});
ProfileLine.forEach((item) => {
  item.addEventListener("click", function () {
    ProfileLine.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});
invoiceLine.forEach((item) => {
  item.addEventListener("click", function () {
    invoiceLine.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});
BenefitLine.forEach((item) => {
  item.addEventListener("click", function () {
    BenefitLine.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});

MB.forEach((Menu_bar) => {
  Menu_bar.addEventListener("click", function () {
    MB.forEach((Menu_bar) => {
      Menu_bar.classList.remove("act_ive");
    });
    this.classList.add("act_ive");
  });
});

balanceLine.forEach((bal_sec) => {
  bal_sec.addEventListener("click", function () {
    balanceLine.forEach((bal_sec) => {
      bal_sec.classList.remove("bal_active");
    });
    this.classList.add("bal_active");
  });
});

toggleBtn.addEventListener("click", function () {
  dropDown1.classList.toggle("hide-menu");
  dropDown2.classList.toggle("hide-menu");
  const isOpen =
    dropDown1.classList.contains("hide-menu") &&
    dropDown2.classList.contains("hide-menu");
  toggleBtnIcon.classList = isOpen ? "fa fa-bars" : "fa-solid fa-xmark";
});

dropWithdrawalBtn.addEventListener("click", function () {
  setTimeout(function () {
    dropWithdrawlTail.classList.toggle("isOpen");
  }, 50);
  const isOpen = dropWithdrawlTail.classList.contains("isOpen");
  dropWithdrawalBtnIcon.classList = isOpen
    ? "fa-solid fa-caret-down fa-xl"
    : "fa-solid fa-caret-up fa-xl";
  if (withdrawalBody.style.height === "200px") {
    withdrawalBody.style.height = "70px";
  } else {
    withdrawalBody.style.height = "200px";
  }
});

dropDepositBtn.addEventListener("click", function () {
  setTimeout(function () {
    dropDepositTail.classList.toggle("isOpen");
  }, 50);
  const Open = dropDepositTail.classList.contains("isOpen");
  dropDepositBtnIcon.classList = Open
    ? "fa-solid fa-caret-down fa-xl"
    : "fa-solid fa-caret-up fa-xl";
  if (depositBody.style.height === "300px") {
    depositBody.style.height = "70px";
  } else {
    depositBody.style.height = "300px";
  }
});

copyBtn.addEventListener("click", function () {
  var text = document.getElementById("myText").innerText;
  var input = document.createElement("textarea");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  alert("Text copied: " + text);
});
