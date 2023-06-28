//button section
const homePageBtn = document.querySelector(".Home-page-btn");
const balancePageBtn = document.querySelector(".Balance-page-btn");
const accountPageBtn = document.querySelector(".Accrec-page-btn");
const invoicePageBtn = document.querySelector(".invoice-page-btn");
const transactionPageBtn = document.querySelector(".transaction-page-btn");
const beneficiariesPageBtn = document.querySelector(".beneficiaries-page-btn");
const ReferralPageBtn = document.querySelector(".referral-page-btn");
const tabline = document.querySelectorAll(".tab-title");
const invoiceLine = document.querySelectorAll(".invoice-title");
const BenefitLine = document.querySelectorAll(".benefit-title");
const MB = document.querySelectorAll(".MB");
const toggleBtn = document.querySelector(".menu");
const toggleBtnIcon = document.querySelector(".menu i");
const dropDown1 = document.querySelector(".fixed-dropdown");
const dropDown2 = document.querySelector(".dropdownmenu");
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
//mini btn
const foreignbtn = document.querySelector(".btn1");
const requestbtn = document.querySelector(".btn2");
const invoiceBtn = document.querySelector(".btn3");
const customerBtn = document.querySelector(".btn4");
const requestBenefitBtn = document.querySelector(".btn5");
const cardBtn = document.querySelector(".btn6");
// mini Page section
const foreignPage = document.querySelector(".tab-list");
const requestPage = document.querySelector(".RA");
const invoiceCustomers = document.querySelector(".invoice-customers");
const invoicebh1 = document.querySelector(".invoice-btn");
const invoicebh2 = document.querySelector(".invoices-rec");
const nameChanging = document.querySelector(".Name-change");
const requestBenefitPage = document.querySelector(".benefit-main");
const cardPage = document.querySelector(".benefit-cards");
//Page section
const homePage = document.querySelector(".Body2 ");
const balancePage = document.querySelector(".Body3");
const accountPage = document.querySelector(".body4");
const invoicePage = document.querySelector(".body5");
const transactionPage = document.querySelector(".body6");
const BeneficiariesPage = document.querySelector(".body7");
const ReferralPage = document.querySelector(".body8");
const copyBtn = document.querySelector(".copy_btn");

invoicebh1.classList.remove("hide");
invoicebh2.classList.remove("hide");

invoiceBtn.addEventListener("click", function () {
  invoicebh1.classList.remove("hide");
  invoicebh2.classList.remove("hide");
  invoiceCustomers.classList.add("hide");
});
customerBtn.addEventListener("click", function () {
  invoicebh1.classList.add("hide");
  invoicebh2.classList.add("hide");
  invoiceCustomers.classList.remove("hide");
});
foreignPage.classList.remove("hide");
foreignbtn.addEventListener("click", function () {
  foreignPage.classList.remove("hide");
  requestPage.classList.add("hide");
});
requestbtn.addEventListener("click", function () {
  foreignPage.classList.add("hide");
  requestPage.classList.remove("hide");
});
requestBenefitPage.classList.remove("hide");
requestBenefitBtn.addEventListener("click", function () {
  requestBenefitPage.classList.remove("hide");
  cardPage.classList.add("hide");
});
cardBtn.addEventListener("click", function () {
  requestBenefitPage.classList.add("hide");
  cardPage.classList.remove("hide");
});

homePage.classList.remove("hidden");
homePageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  homePage.classList.remove("hidden");
  balancePage.classList.add("hidden");
  accountPage.classList.add("hidden");
  invoicePage.classList.add("hidden");
  transactionPage.classList.add("hidden");
  BeneficiariesPage.classList.add("hidden");
  ReferralPage.classList.add("hidden");
  nameChanging.innerHTML = `<h1 class="Name-change"><span>Welcome,</span> Obazee!👋</h1>`;
});
balancePageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  homePage.classList.add("hidden");
  balancePage.classList.remove("hidden");
  accountPage.classList.add("hidden");
  invoicePage.classList.add("hidden");
  transactionPage.classList.add("hidden");
  BeneficiariesPage.classList.add("hidden");
  ReferralPage.classList.add("hidden");
  nameChanging.innerHTML = "Balance";
});
accountPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  balancePage.classList.add("hidden");
  homePage.classList.add("hidden");
  accountPage.classList.remove("hidden");
  invoicePage.classList.add("hidden");
  transactionPage.classList.add("hidden");
  BeneficiariesPage.classList.add("hidden");
  ReferralPage.classList.add("hidden");
  nameChanging.innerHTML = "Accounts";
});
invoicePageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  invoicePage.classList.remove("hidden");
  balancePage.classList.add("hidden");
  homePage.classList.add("hidden");
  accountPage.classList.add("hidden");
  transactionPage.classList.add("hidden");
  BeneficiariesPage.classList.add("hidden");
  ReferralPage.classList.add("hidden");
  nameChanging.innerHTML = "Invoice";
});
transactionPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  invoicePage.classList.add("hidden");
  balancePage.classList.add("hidden");
  homePage.classList.add("hidden");
  accountPage.classList.add("hidden");
  transactionPage.classList.remove("hidden");
  ReferralPage.classList.add("hidden");
  BeneficiariesPage.classList.add("hidden");
  nameChanging.innerHTML = "Transaction";
});
beneficiariesPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  invoicePage.classList.add("hidden");
  balancePage.classList.add("hidden");
  homePage.classList.add("hidden");
  accountPage.classList.add("hidden");
  transactionPage.classList.add("hidden");
  ReferralPage.classList.add("hidden");
  BeneficiariesPage.classList.remove("hidden");
  nameChanging.innerHTML = "Beneficiaries";
});
ReferralPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  invoicePage.classList.add("hidden");
  balancePage.classList.add("hidden");
  homePage.classList.add("hidden");
  accountPage.classList.add("hidden");
  transactionPage.classList.add("hidden");
  BeneficiariesPage.classList.add("hidden");
  ReferralPage.classList.remove("hidden");
  nameChanging.innerHTML = "Referrals";
});

////////////////////////////////d
dropHomePageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  homePage.classList.remove("hidden");
  balancePage.classList.add("hidden");
  accountPage.classList.add("hidden");
  invoicePage.classList.add("hidden");
  transactionPage.classList.add("hidden");
  BeneficiariesPage.classList.add("hidden");
  ReferralPage.classList.add("hidden");
  nameChanging.innerHTML = `<h1 class="Name-change"><span>Welcome,</span> Obazee!👋</h1>`;
});
dropBalancePageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  homePage.classList.add("hidden");
  balancePage.classList.remove("hidden");
  accountPage.classList.add("hidden");
  invoicePage.classList.add("hidden");
  transactionPage.classList.add("hidden");
  BeneficiariesPage.classList.add("hidden");
  ReferralPage.classList.add("hidden");
  nameChanging.innerHTML = "Balance";
});
dropAccountPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  balancePage.classList.add("hidden");
  homePage.classList.add("hidden");
  accountPage.classList.remove("hidden");
  invoicePage.classList.add("hidden");
  transactionPage.classList.add("hidden");
  BeneficiariesPage.classList.add("hidden");
  ReferralPage.classList.add("hidden");
  nameChanging.innerHTML = "Accounts";
});
dropInvoicePageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  invoicePage.classList.remove("hidden");
  balancePage.classList.add("hidden");
  homePage.classList.add("hidden");
  accountPage.classList.add("hidden");
  transactionPage.classList.add("hidden");
  BeneficiariesPage.classList.add("hidden");
  ReferralPage.classList.add("hidden");
  nameChanging.innerHTML = "Invoice";
});
dropTransactionPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  invoicePage.classList.add("hidden");
  balancePage.classList.add("hidden");
  homePage.classList.add("hidden");
  accountPage.classList.add("hidden");
  transactionPage.classList.remove("hidden");
  ReferralPage.classList.add("hidden");
  BeneficiariesPage.classList.add("hidden");
  nameChanging.innerHTML = "Transaction";
});
dropBeneficiariesPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  invoicePage.classList.add("hidden");
  balancePage.classList.add("hidden");
  homePage.classList.add("hidden");
  accountPage.classList.add("hidden");
  transactionPage.classList.add("hidden");
  ReferralPage.classList.add("hidden");
  BeneficiariesPage.classList.remove("hidden");
  nameChanging.innerHTML = "Beneficiaries";
});
dropReferralPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  invoicePage.classList.add("hidden");
  balancePage.classList.add("hidden");
  homePage.classList.add("hidden");
  accountPage.classList.add("hidden");
  transactionPage.classList.add("hidden");
  BeneficiariesPage.classList.add("hidden");
  ReferralPage.classList.remove("hidden");
  nameChanging.innerHTML = "Referrals";
});
////////////////////////

tabline.forEach((item) => {
  item.addEventListener("click", function () {
    tabline.forEach((item) => {
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

toggleBtn.addEventListener("click", function () {
  dropDown1.classList.toggle("hide-menu");
  dropDown2.classList.toggle("hide-menu");
  const isOpen =
    dropDown1.classList.contains("hide-menu") &&
    dropDown2.classList.contains("hide-menu");
  toggleBtnIcon.classList = isOpen ? "fa fa-bars" : "fa-solid fa-xmark";
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
