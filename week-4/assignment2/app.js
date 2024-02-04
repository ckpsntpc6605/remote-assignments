async function ajax(url) {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw Error("Response is not ok......");
    } else {
      return res.json();
    }
  });
}

function render(data) {
  const wrap = document.querySelector(".wrap");
  let html = "";
  data.map((product) => {
    html += `<h1>${product.name}</h1>
            <p>${product.description}</p>
            <p>${product.price}</p>`;
  });
  wrap.innerHTML = html;
}
const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  render(data);
});
