let scene1, camera1, renderer1, canvas1;
let scene2, camera2, renderer2, canvas2;

function init() {
  initCard1();
  initCard2();
}

function initCard1() {
  canvas1 = document.getElementById("3d-canvas1");
  scene1 = new THREE.Scene();

  camera1 = new THREE.PerspectiveCamera(
    35,
    canvas1.clientWidth / canvas1.clientHeight,
    0.1,
    1000
  );
  camera1.position.set(4, 5, 7);

  renderer1 = new THREE.WebGLRenderer({ canvas: canvas1, alpha: true });
  renderer1.setSize(canvas1.clientWidth, canvas1.clientHeight);
  renderer1.setPixelRatio(window.devicePixelRatio);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene1.add(light);

  const loader = new THREE.GLTFLoader();
  const loadingIndicator = document.createElement("div");
  loadingIndicator.textContent = "Loading...";
  document.body.appendChild(loadingIndicator);

  loader.load(
    "/mie.glb",
    function (gltf) {
      loadingIndicator.style.display = "none";
      const model = gltf.scene;
      model.position.set(0, -0.5, 0);
      scene1.add(model);
      animateCard1();
    },
    undefined,
    function (error) {
      console.error("Error loading the model:", error);
      loadingIndicator.textContent = "Failed to load model";
    }
  );

  const controls = new THREE.OrbitControls(camera1, renderer1.domElement);
  controls.enableZoom = true;

  window.addEventListener("resize", onWindowResize);
}

function initCard2() {
  canvas2 = document.getElementById("3d-canvas2");
  scene2 = new THREE.Scene();

  camera2 = new THREE.PerspectiveCamera(
    35,
    canvas2.clientWidth / canvas2.clientHeight,
    0.1,
    1000
  );
  camera2.position.set(4, 5, 7);

  renderer2 = new THREE.WebGLRenderer({ canvas: canvas2, alpha: true });
  renderer2.setSize(canvas2.clientWidth, canvas2.clientHeight);
  renderer2.setPixelRatio(window.devicePixelRatio);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene2.add(light);

  const loader = new THREE.GLTFLoader();
  const loadingIndicator = document.createElement("div");
  loadingIndicator.textContent = "Loading...";
  document.body.appendChild(loadingIndicator);

  loader.load(
    "/aqua.glb",
    function (gltf) {
      loadingIndicator.style.display = "none";
      const model = gltf.scene;
      model.position.set(0, -1, 0);
      scene2.add(model);
      animateCard2();
    },
    undefined,
    function (error) {
      console.error("Error loading the model:", error);
      loadingIndicator.textContent = "Failed to load model";
    }
  );

  const controls = new THREE.OrbitControls(camera2, renderer2.domElement);
  controls.enableZoom = true;

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  if (canvas1) {
    camera1.aspect = canvas1.clientWidth / canvas1.clientHeight;
    camera1.updateProjectionMatrix();
    renderer1.setSize(canvas1.clientWidth, canvas1.clientHeight);
  }
  if (canvas2) {
    camera2.aspect = canvas2.clientWidth / canvas2.clientHeight;
    camera2.updateProjectionMatrix();
    renderer2.setSize(canvas2.clientWidth, canvas2.clientHeight);
  }
}

function animateCard1() {
  requestAnimationFrame(animateCard1);
  renderer1.render(scene1, camera1);
}

function animateCard2() {
  requestAnimationFrame(animateCard2);
  renderer2.render(scene2, camera2);
}

window.onload = init;


const beliBtns = [document.getElementById("beli-btn1"), document.getElementById("beli-btn2")];
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");

beliBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    popup.classList.add("show");
    overlay.classList.add("show");
  });
});

closeBtn.addEventListener("click", function () {
  popup.classList.remove("show");
  overlay.classList.remove("show");
});


const deskripsiBtns = [document.getElementById("deskripsi-btn1"), document.getElementById("deskripsi-btn2")];
const descriptionSections = [document.getElementById("description-section1"), document.getElementById("description-section2")];

deskripsiBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    descriptionSections[index].classList.toggle("active");
    btn.setAttribute("aria-expanded", descriptionSections[index].classList.contains("active"));
  });
});


window.addEventListener("beforeunload", function () {
  if (renderer1) renderer1.dispose();
  if (renderer2) renderer2.dispose();
  scene1.children.forEach((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) child.material.dispose();
  });
  scene2.children.forEach((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) child.material.dispose();
  });
});
