let scene1, camera1, renderer1, canvas1;
let scene2, camera2, renderer2, canvas2;
let scene3, camera3, renderer3, canvas3;
let scene4, camera4, renderer4, canvas4;
let scene5, camera5, renderer5, canvas5;
let scene6, camera6, renderer6, canvas6;

function init() {
  initCard1();
  initCard2();
  initCard3();
  initCard4();
  initCard5();
  initCard6();
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
    "/botol.glb",
    function (gltf) {
      loadingIndicator.style.display = "none";
      const model = gltf.scene;
      model.position.set(0, -1.5, 0);
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

function initCard3() {
  canvas3 = document.getElementById("3d-canvas3");
  scene3 = new THREE.Scene();

  camera3 = new THREE.PerspectiveCamera(
    35,
    canvas3.clientWidth / canvas3.clientHeight,
    0.1,
    1000
  );
  camera3.position.set(4, 5, 7);

  renderer3 = new THREE.WebGLRenderer({ canvas: canvas3, alpha: true });
  renderer3.setSize(canvas3.clientWidth, canvas3.clientHeight);
  renderer3.setPixelRatio(window.devicePixelRatio);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene3.add(light);

  const loader = new THREE.GLTFLoader();
  const loadingIndicator = document.createElement("div");
  loadingIndicator.textContent = "Loading...";
  document.body.appendChild(loadingIndicator);

  loader.load(
    "/v2.glb",
    function (gltf) {
      loadingIndicator.style.display = "none";
      const model = gltf.scene;
      model.position.set(0, -0.5, 0);
      scene3.add(model);
      animateCard3();
    },
    undefined,
    function (error) {
      console.error("Error loading the model:", error);
      loadingIndicator.textContent = "Failed to load model";
    }
  );

  const controls = new THREE.OrbitControls(camera3, renderer3.domElement);
  controls.enableZoom = true;

  window.addEventListener("resize", onWindowResize);
}

function initCard4() {
  canvas4 = document.getElementById("3d-canvas4");
  scene4 = new THREE.Scene();

  camera4 = new THREE.PerspectiveCamera(
    35,
    canvas4.clientWidth / canvas4.clientHeight,
    0.1,
    1000
  );
  camera4.position.set(4, 5, 7);

  renderer4 = new THREE.WebGLRenderer({ canvas: canvas4, alpha: true });
  renderer4.setSize(canvas4.clientWidth, canvas4.clientHeight);
  renderer4.setPixelRatio(window.devicePixelRatio);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene4.add(light);

  const loader = new THREE.GLTFLoader();
  const loadingIndicator = document.createElement("div");
  loadingIndicator.textContent = "Loading...";
  document.body.appendChild(loadingIndicator);

  loader.load(
    "/teh.glb",
    function (gltf) {
      loadingIndicator.style.display = "none";
      const model = gltf.scene;
      model.position.set(0, -0.5, 0);
      scene4.add(model);
      animateCard4();
    },
    undefined,
    function (error) {
      console.error("Error loading the model:", error);
      loadingIndicator.textContent = "Failed to load model";
    }
  );

  const controls = new THREE.OrbitControls(camera4, renderer4.domElement);
  controls.enableZoom = true;

  window.addEventListener("resize", onWindowResize);
}

function initCard5() {
  canvas5 = document.getElementById("3d-canvas5");
  scene5 = new THREE.Scene();

  camera5 = new THREE.PerspectiveCamera(
    35,
    canvas5.clientWidth / canvas5.clientHeight,
    0.1,
    1000
  );
  camera5.position.set(5, 5, 7);

  renderer5 = new THREE.WebGLRenderer({ canvas: canvas5, alpha: true });
  renderer5.setSize(canvas5.clientWidth, canvas5.clientHeight);
  renderer5.setPixelRatio(window.devicePixelRatio);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene5.add(light);

  const loader = new THREE.GLTFLoader();
  const loadingIndicator = document.createElement("div");
  loadingIndicator.textContent = "Loading...";
  document.body.appendChild(loadingIndicator);

  loader.load(
    "/nasduk.glb",
    function (gltf) {
      loadingIndicator.style.display = "none";
      const model = gltf.scene;
      model.position.set(0, -0.5, 0);
      scene5.add(model);
      animateCard5();
    },
    undefined,
    function (error) {
      console.error("Error loading the model:", error);
      loadingIndicator.textContent = "Failed to load model";
    }
  );

  const controls = new THREE.OrbitControls(camera5, renderer5.domElement);
  controls.enableZoom = true;

  window.addEventListener("resize", onWindowResize);
}

function initCard6() {
  canvas6 = document.getElementById("3d-canvas6");
  scene6 = new THREE.Scene();

  camera6 = new THREE.PerspectiveCamera(
    35,
    canvas6.clientWidth / canvas6.clientHeight,
    0.1,
    1000
  );
  camera6.position.set(5, 5, 7);

  renderer6 = new THREE.WebGLRenderer({ canvas: canvas6, alpha: true });
  renderer6.setSize(canvas6.clientWidth, canvas6.clientHeight);
  renderer6.setPixelRatio(window.devicePixelRatio);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene6.add(light);

  const loader = new THREE.GLTFLoader();
  const loadingIndicator = document.createElement("div");
  loadingIndicator.textContent = "Loading...";
  document.body.appendChild(loadingIndicator);

  loader.load(
    "/nasgor.glb",
    function (gltf) {
      loadingIndicator.style.display = "none";
      const model = gltf.scene;
      model.position.set(0, -0.5, 0);
      scene6.add(model);
      animateCard6();
    },
    undefined,
    function (error) {
      console.error("Error loading the model:", error);
      loadingIndicator.textContent = "Failed to load model";
    }
  );

  const controls = new THREE.OrbitControls(camera6, renderer6.domElement);
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
  if (canvas3) {
    camera3.aspect = canvas3.clientWidth / canvas3.clientHeight;
    camera3.updateProjectionMatrix();
    renderer3.setSize(canvas3.clientWidth, canvas3.clientHeight);
  }
  if (canvas4) {
    camera4.aspect = canvas4.clientWidth / canvas4.clientHeight;
    camera4.updateProjectionMatrix();
    renderer4.setSize(canvas4.clientWidth, canvas4.clientHeight);
  }
  if (canvas5) {
    camera5.aspect = canvas5.clientWidth / canvas5.clientHeight;
    camera5.updateProjectionMatrix();
    renderer5.setSize(canvas5.clientWidth, canvas5.clientHeight);
  }
  if (canvas6) {
    camera6.aspect = canvas6.clientWidth / canvas6.clientHeight;
    camera6.updateProjectionMatrix();
    renderer6.setSize(canvas6.clientWidth, canvas6.clientHeight);
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

function animateCard3() {
  requestAnimationFrame(animateCard3);
  renderer3.render(scene3, camera3);
}
function animateCard4() {
  requestAnimationFrame(animateCard4);
  renderer4.render(scene4, camera4);
}

function animateCard5() {
  requestAnimationFrame(animateCard5);
  renderer5.render(scene5, camera5);
}

function animateCard6() {
  requestAnimationFrame(animateCard3);
  renderer6.render(scene6, camera6);
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
