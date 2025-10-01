const categoriesImgGalleryEl = document.getElementById("categoriesImgGallery");

const productEngineeringImgEl = document.getElementById(
  "productEngineeringImg"
);


const nexGenBtnEl = document.getElementById("nexGenBtn");
const productEngineeringBtnEl = document.getElementById("productEngineeringBtn");
const digitalExperienceBtnEl = document.getElementById("digitalExperienceBtn");
const aimlBtnEl = document.getElementById("aimlBtn");
const sapBtnEl = document.getElementById("sapBtn");
const dataScienceBtnEl = document.getElementById("dataScienceBtn");
const cloudBtnEl = document.getElementById("cloudBtn");

const dataScienceImgEl = document.getElementById("dataScienceImg");
const aimlImgEl = document.getElementById("aimlImg");
const cloudImgEl = document.getElementById("cloudImg");
const sapImgEl = document.getElementById("sapImg");
const nexGenImgEl = document.getElementById("nexGenImg");
const digitalExperienceImgEl = document.getElementById("digitalExperienceImg");

const productEngineeringList = document.getElementById("productEngineering");
const digitalExperienceList = document.getElementById("digitalExperience");
const aimlList = document.getElementById("aiml");
const sapList = document.getElementById("sap");
const dataScienceList = document.getElementById("dataScience");
const cloudList = document.getElementById("cloud");
const nexGenList = document.getElementById("nexGen");

const productEngineeringIconEl = document.getElementById(
  "productEngineeringIcon"
);
const digitalExperienceIconEl = document.getElementById(
  "digitalExperienceIcon"
);
const aimlIconEl = document.getElementById("aimlIcon");
const sapIconEl = document.getElementById("sapIcon");
const dataScienceIconEl = document.getElementById("dataScienceIcon");
const cloudIconEl = document.getElementById("cloudIcon");
const nexGenIconEl = document.getElementById("nexGenIcon");

document
  .getElementById("productEngineeringBtn")
  .addEventListener("click", function () {
    const icon = document.getElementById("productEngineeringIcon");
    // Toggle visibility of the productEngineering list
    const productEngineeringBtnEl = document.getElementById(
      "productEngineeringBtn"
    );
    const productEngineeringOuterEl = document.getElementById(
      "productEngineeringOuter"
    );
    productEngineeringImg.classList.remove("d-none");
    dataScienceImg.classList.add("d-none");
    aimlImg.classList.add("d-none");
    cloudImg.classList.add("d-none");
    sapImg.classList.add("d-none");
    nexGenImg.classList.add("d-none");
    digitalExperienceImg.classList.add("d-none");

    digitalExperienceBtnEl.classList.remove("rounded-bottom-4");
    aimlBtnEl.classList.remove("rounded-bottom-4");
    sapBtnEl.classList.remove("rounded-bottom-4");
    dataScienceBtnEl.classList.remove("rounded-bottom-4");
    nexGenBtnEl.classList.remove("rounded-bottom-4");
    cloudBtnEl.classList.remove("rounded-bottom-4");

    if (productEngineeringList.classList.contains("d-none")) {
      productEngineeringList.classList.remove("d-none");
      productEngineeringBtnEl.classList.add("rounded-bottom-4");
      digitalExperienceList.classList.add("d-none");
      aimlList.classList.add("d-none");
      sapList.classList.add("d-none");
      dataScienceList.classList.add("d-none");
      cloudList.classList.add("d-none");
      nexGenList.classList.add("d-none");

      digitalExperienceList.classList.add("d-none");
      aimlList.classList.add("d-none");
      sapList.classList.add("d-none");
      dataScienceList.classList.add("d-none");
      cloudList.classList.add("d-none");
      nexGenList.classList.add("d-none");
      productEngineeringIconEl.classList.add("bi-chevron-up");
      productEngineeringIconEl.classList.remove("bi-chevron-down");

      digitalExperienceIconEl.classList.remove("bi-chevron-up");
      digitalExperienceIconEl.classList.add("bi-chevron-down");

      aimlIconEl.classList.remove("bi-chevron-up");
      aimlIconEl.classList.add("bi-chevron-down");

      sapIconEl.classList.remove("bi-chevron-up");
      sapIconEl.classList.add("bi-chevron-down");

      dataScienceIconEl.classList.remove("bi-chevron-up");
      dataScienceIconEl.classList.add("bi-chevron-down");

      cloudIconEl.classList.remove("bi-chevron-up");
      cloudIconEl.classList.add("bi-chevron-down");

      nexGenIconEl.classList.remove("bi-chevron-up");
      nexGenIconEl.classList.add("bi-chevron-down");
    } else {
      productEngineeringList.classList.add("d-none");
      productEngineeringBtnEl.classList.remove("rounded-bottom-4");
      icon.classList.remove("bi-chevron-up");
      icon.classList.add("bi-chevron-down");
    }
  });

document
  .getElementById("digitalExperienceBtn")
  .addEventListener("click", function () {
    const icon = document.getElementById("digitalExperienceIcon");
    // Toggle visibility of the digitalExperience list
    const digitalExperienceBtnEl = document.getElementById(
      "digitalExperienceBtn"
    );
    const digitalExperienceOuterEl = document.getElementById(
      "digitalExperienceOuter"
    );
    productEngineeringImg.classList.add("d-none");
    dataScienceImg.classList.add("d-none");
    aimlImg.classList.add("d-none");
    cloudImg.classList.add("d-none");
    sapImg.classList.add("d-none");
    nexGenImg.classList.add("d-none");
    digitalExperienceImg.classList.remove("d-none");

    productEngineeringBtnEl.classList.remove("rounded-bottom-4");
    aimlBtnEl.classList.remove("rounded-bottom-4");
    sapBtnEl.classList.remove("rounded-bottom-4");
    dataScienceBtnEl.classList.remove("rounded-bottom-4");
    nexGenBtnEl.classList.remove("rounded-bottom-4");
    cloudBtnEl.classList.remove("rounded-bottom-4");


    if (digitalExperienceList.classList.contains("d-none")) {
      digitalExperienceList.classList.remove("d-none");
      digitalExperienceBtnEl.classList.add("rounded-bottom-4");
      productEngineeringList.classList.add("d-none");
      aimlList.classList.add("d-none");
      sapList.classList.add("d-none");
      dataScienceList.classList.add("d-none");
      cloudList.classList.add("d-none");
      nexGenList.classList.add("d-none");
      digitalExperienceIconEl.classList.add("bi-chevron-up");
      digitalExperienceIconEl.classList.remove("bi-chevron-down");

      productEngineeringIconEl.classList.remove("bi-chevron-up");
      productEngineeringIconEl.classList.add("bi-chevron-down");

      aimlIconEl.classList.remove("bi-chevron-up");
      aimlIconEl.classList.add("bi-chevron-down");

      sapIconEl.classList.remove("bi-chevron-up");
      sapIconEl.classList.add("bi-chevron-down");

      dataScienceIconEl.classList.remove("bi-chevron-up");
      dataScienceIconEl.classList.add("bi-chevron-down");

      cloudIconEl.classList.remove("bi-chevron-up");
      cloudIconEl.classList.add("bi-chevron-down");

      nexGenIconEl.classList.remove("bi-chevron-up");
      nexGenIconEl.classList.add("bi-chevron-down");
    } else {
      digitalExperienceList.classList.add("d-none");
      digitalExperienceBtnEl.classList.remove("rounded-bottom-4");
      icon.classList.remove("bi-chevron-up");
      icon.classList.add("bi-chevron-down");
    }
  });

document.getElementById("aimlBtn").addEventListener("click", function () {
  const icon = document.getElementById("aimlIcon");
  // Toggle visibility of the aiml list
  productEngineeringImg.classList.add("d-none");
  dataScienceImg.classList.add("d-none");
  aimlImg.classList.remove("d-none");
  cloudImg.classList.add("d-none");
  sapImg.classList.add("d-none");
  nexGenImg.classList.add("d-none");
  digitalExperienceImg.classList.add("d-none");

  productEngineeringBtnEl.classList.remove("rounded-bottom-4");
  digitalExperienceBtnEl.classList.remove("rounded-bottom-4");
  sapBtnEl.classList.remove("rounded-bottom-4");
  dataScienceBtnEl.classList.remove("rounded-bottom-4");
  nexGenBtnEl.classList.remove("rounded-bottom-4");
  cloudBtnEl.classList.remove("rounded-bottom-4");

  const aimlBtnEl = document.getElementById("aimlBtn");
  const aimlOuterEl = document.getElementById("aimlOuter");
  if (aimlList.classList.contains("d-none")) {
    aimlList.classList.remove("d-none");
    aimlBtnEl.classList.add("rounded-bottom-4");
    productEngineeringList.classList.add("d-none");
    digitalExperienceList.classList.add("d-none");
    sapList.classList.add("d-none");
    dataScienceList.classList.add("d-none");
    cloudList.classList.add("d-none");
    nexGenList.classList.add("d-none");
    aimlIconEl.classList.add("bi-chevron-up");
    aimlIconEl.classList.remove("bi-chevron-down");

    productEngineeringIconEl.classList.remove("bi-chevron-up");
    productEngineeringIconEl.classList.add("bi-chevron-down");

    digitalExperienceIconEl.classList.remove("bi-chevron-up");
    digitalExperienceIconEl.classList.add("bi-chevron-down");

    sapIconEl.classList.remove("bi-chevron-up");
    sapIconEl.classList.add("bi-chevron-down");

    dataScienceIconEl.classList.remove("bi-chevron-up");
    dataScienceIconEl.classList.add("bi-chevron-down");

    cloudIconEl.classList.remove("bi-chevron-up");
    cloudIconEl.classList.add("bi-chevron-down");

    nexGenIconEl.classList.remove("bi-chevron-up");
    nexGenIconEl.classList.add("bi-chevron-down");
  } else {
    aimlList.classList.add("d-none");
    aimlBtnEl.classList.remove("rounded-bottom-4");
    icon.classList.remove("bi-chevron-up");
    icon.classList.add("bi-chevron-down");
  }
});

document.getElementById("sapBtn").addEventListener("click", function () {
  const icon = document.getElementById("sapIcon");
  productEngineeringImg.classList.add("d-none");
  dataScienceImg.classList.add("d-none");
  aimlImg.classList.add("d-none");
  cloudImg.classList.add("d-none");
  sapImg.classList.remove("d-none");
  nexGenImg.classList.add("d-none");
  digitalExperienceImg.classList.add("d-none");

  productEngineeringBtnEl.classList.remove("rounded-bottom-4");
  digitalExperienceBtnEl.classList.remove("rounded-bottom-4");
  aimlBtnEl.classList.remove("rounded-bottom-4");
  dataScienceBtnEl.classList.remove("rounded-bottom-4");
  nexGenBtnEl.classList.remove("rounded-bottom-4");
  cloudBtnEl.classList.remove("rounded-bottom-4");
  // Toggle visibility of the sap list
  const sapBtnEl = document.getElementById("sapBtn");
  const sapOuterEl = document.getElementById("sapOuter");
  if (sapList.classList.contains("d-none")) {
    sapList.classList.remove("d-none");
    sapBtnEl.classList.add("rounded-bottom-4");
    productEngineeringList.classList.add("d-none");
    digitalExperienceList.classList.add("d-none");
    aimlList.classList.add("d-none");
    dataScienceList.classList.add("d-none");
    cloudList.classList.add("d-none");
    nexGenList.classList.add("d-none");
    sapIconEl.classList.add("bi-chevron-up");
    sapIconEl.classList.remove("bi-chevron-down");

    productEngineeringIconEl.classList.remove("bi-chevron-up");
    productEngineeringIconEl.classList.add("bi-chevron-down");

    digitalExperienceIconEl.classList.remove("bi-chevron-up");
    digitalExperienceIconEl.classList.add("bi-chevron-down");

    aimlIconEl.classList.remove("bi-chevron-up");
    aimlIconEl.classList.add("bi-chevron-down");

    dataScienceIconEl.classList.remove("bi-chevron-up");
    dataScienceIconEl.classList.add("bi-chevron-down");

    cloudIconEl.classList.remove("bi-chevron-up");
    cloudIconEl.classList.add("bi-chevron-down");

    nexGenIconEl.classList.remove("bi-chevron-up");
    nexGenIconEl.classList.add("bi-chevron-down");
  } else {
    sapList.classList.add("d-none");
    sapBtnEl.classList.remove("rounded-bottom-4");
    icon.classList.remove("bi-chevron-up");
    icon.classList.add("bi-chevron-down");
  }
});

document
  .getElementById("dataScienceBtn")
  .addEventListener("click", function () {
    const icon = document.getElementById("dataScienceIcon");
    productEngineeringImg.classList.add("d-none");
    dataScienceImg.classList.remove("d-none");
    aimlImg.classList.add("d-none");
    cloudImg.classList.add("d-none");
    sapImg.classList.add("d-none");
    nexGenImg.classList.add("d-none");
    digitalExperienceImg.classList.add("d-none");

    productEngineeringBtnEl.classList.remove("rounded-bottom-4");
    digitalExperienceBtnEl.classList.remove("rounded-bottom-4");
    aimlBtnEl.classList.remove("rounded-bottom-4");
    sapBtnEl.classList.remove("rounded-bottom-4");
    nexGenBtnEl.classList.remove("rounded-bottom-4");
    cloudBtnEl.classList.remove("rounded-bottom-4");


    // Toggle visibility of the dataScience list
    const dataScienceBtnEl = document.getElementById("dataScienceBtn");
    const dataScienceOuterEl = document.getElementById("dataScienceOuter");
    if (dataScienceList.classList.contains("d-none")) {
      dataScienceList.classList.remove("d-none");
      dataScienceBtnEl.classList.add("rounded-bottom-4");

      productEngineeringList.classList.add("d-none");
      digitalExperienceList.classList.add("d-none");
      aimlList.classList.add("d-none");
      sapList.classList.add("d-none");
      cloudList.classList.add("d-none");
      nexGenList.classList.add("d-none");
      dataScienceIconEl.classList.add("bi-chevron-up");
      dataScienceIconEl.classList.remove("bi-chevron-down");

      productEngineeringIconEl.classList.remove("bi-chevron-up");
      productEngineeringIconEl.classList.add("bi-chevron-down");

      digitalExperienceIconEl.classList.remove("bi-chevron-up");
      digitalExperienceIconEl.classList.add("bi-chevron-down");

      aimlIconEl.classList.remove("bi-chevron-up");
      aimlIconEl.classList.add("bi-chevron-down");

      sapIconEl.classList.remove("bi-chevron-up");
      sapIconEl.classList.add("bi-chevron-down");

      cloudIconEl.classList.remove("bi-chevron-up");
      cloudIconEl.classList.add("bi-chevron-down");

      nexGenIconEl.classList.remove("bi-chevron-up");
      nexGenIconEl.classList.add("bi-chevron-down");
    } else {
      dataScienceList.classList.add("d-none");
      dataScienceBtnEl.classList.remove("rounded-bottom-4");
      icon.classList.remove("bi-chevron-up");
      icon.classList.add("bi-chevron-down");
    }
  });

document.getElementById("cloudBtn").addEventListener("click", function () {
  const icon = document.getElementById("cloudIcon");
  // Toggle visibility of the cloud list
  productEngineeringImg.classList.add("d-none");
  dataScienceImg.classList.add("d-none");
  aimlImg.classList.add("d-none");
  cloudImg.classList.remove("d-none");
  sapImg.classList.add("d-none");
  nexGenImg.classList.add("d-none");
  digitalExperienceImg.classList.add("d-none");

  productEngineeringBtnEl.classList.remove("rounded-bottom-4");
  digitalExperienceBtnEl.classList.remove("rounded-bottom-4");
  aimlBtnEl.classList.remove("rounded-bottom-4");
  sapBtnEl.classList.remove("rounded-bottom-4");
  nexGenBtnEl.classList.remove("rounded-bottom-4");
  dataScienceBtnEl.classList.remove("rounded-bottom-4");


  const cloudBtnEl = document.getElementById("cloudBtn");
  const cloudOuterEl = document.getElementById("cloudOuter");
  if (cloudList.classList.contains("d-none")) {
    cloudList.classList.remove("d-none");
    cloudBtnEl.classList.add("rounded-bottom-4");
    productEngineeringList.classList.add("d-none");
    digitalExperienceList.classList.add("d-none");
    aimlList.classList.add("d-none");
    sapList.classList.add("d-none");
    dataScienceList.classList.add("d-none");
    nexGenList.classList.add("d-none");
    cloudIconEl.classList.add("bi-chevron-up");
    cloudIconEl.classList.remove("bi-chevron-down");

    productEngineeringIconEl.classList.remove("bi-chevron-up");
    productEngineeringIconEl.classList.add("bi-chevron-down");

    digitalExperienceIconEl.classList.remove("bi-chevron-up");
    digitalExperienceIconEl.classList.add("bi-chevron-down");

    aimlIconEl.classList.remove("bi-chevron-up");
    aimlIconEl.classList.add("bi-chevron-down");

    sapIconEl.classList.remove("bi-chevron-up");
    sapIconEl.classList.add("bi-chevron-down");

    dataScienceIconEl.classList.remove("bi-chevron-up");
    dataScienceIconEl.classList.add("bi-chevron-down");

    nexGenIconEl.classList.remove("bi-chevron-up");
    nexGenIconEl.classList.add("bi-chevron-down");
  } else {
    cloudList.classList.add("d-none");
    cloudBtnEl.classList.remove("rounded-bottom-4");
    icon.classList.remove("bi-chevron-up");
    icon.classList.add("bi-chevron-down");
  }
});

document.getElementById("nexGenBtn").addEventListener("click", function () {
  const icon = document.getElementById("nexGenIcon");
  // Toggle visibility of the nexGen list
  productEngineeringImg.classList.add("d-none");
  dataScienceImg.classList.add("d-none");
  aimlImg.classList.add("d-none");
  cloudImg.classList.add("d-none");
  sapImg.classList.add("d-none");
  nexGenImg.classList.remove("d-none");
  digitalExperienceImg.classList.add("d-none");

  productEngineeringBtnEl.classList.remove("rounded-bottom-4");
  digitalExperienceBtnEl.classList.remove("rounded-bottom-4");
  aimlBtnEl.classList.remove("rounded-bottom-4");
  sapBtnEl.classList.remove("rounded-bottom-4");
  cloudBtnEl.classList.remove("rounded-bottom-4");
  dataScienceBtnEl.classList.remove("rounded-bottom-4");


  const nexGenOuterEl = document.getElementById("nexGenOuter");
  if (nexGenList.classList.contains("d-none")) {
    nexGenList.classList.remove("d-none");
    nexGenBtnEl.classList.add("rounded-bottom-4");
    productEngineeringList.classList.add("d-none");
    digitalExperienceList.classList.add("d-none");
    aimlList.classList.add("d-none");
    sapList.classList.add("d-none");
    cloudList.classList.add("d-none");
    dataScienceList.classList.add("d-none");
    nexGenIconEl.classList.add("bi-chevron-up");
    nexGenIconEl.classList.remove("bi-chevron-down");

    productEngineeringIconEl.classList.remove("bi-chevron-up");
    productEngineeringIconEl.classList.add("bi-chevron-down");

    digitalExperienceIconEl.classList.remove("bi-chevron-up");
    digitalExperienceIconEl.classList.add("bi-chevron-down");

    aimlIconEl.classList.remove("bi-chevron-up");
    aimlIconEl.classList.add("bi-chevron-down");

    sapIconEl.classList.remove("bi-chevron-up");
    sapIconEl.classList.add("bi-chevron-down");

    dataScienceIconEl.classList.remove("bi-chevron-up");
    dataScienceIconEl.classList.add("bi-chevron-down");

    cloudIconEl.classList.remove("bi-chevron-up");
    cloudIconEl.classList.add("bi-chevron-down");
  } else {
    nexGenList.classList.add("d-none");
    nexGenBtnEl.classList.remove("rounded-bottom-4");
    icon.classList.remove("bi-chevron-up");
    icon.classList.add("bi-chevron-down");
  }
});

///hover
// Loop through each section and apply hover functionality