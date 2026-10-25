/* مفيش حاجة هنا محتاجة تعديل — كل التحكم في products.js */
(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pr = (n) => (SITE.markup && SITE.markup !== 1) ? Math.round(n * SITE.markup / 5) * 5 : n;
  const fmt = (n) => Number(n).toLocaleString("ar-EG") + " " + SITE.currency;
  const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#eef1f6"/><text x="100" y="108" font-size="14" text-anchor="middle" fill="#9aa5b8" font-family="sans-serif">الصورة غير موجودة</text></svg>');

  const qtyLabel = (n) => (n === 2 ? "قطعتين" : n + " قطع");
  const tgLink = (p, o) => {
    if (p.link) return p.link;
    const msg = o
      ? "مرحباً، عايز أطلب " + qtyLabel(o[0]) + " من: " + p.title + " — بسعر " + pr(o[1]) + " " + SITE.currency
      : "مرحباً، عايز أطلب: " + p.title + " — السعر " + pr(p.price) + " " + SITE.currency;
    return "https://t.me/" + SITE.telegram + "?text=" + encodeURIComponent(msg);
  };
  const discount = (p) => (p.oldPrice && p.oldPrice > p.price) ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const bestOffer = (p) => (p.offers && p.offers.length) ? Math.max.apply(null, p.offers.map((o) => o[2])) : 0;

  function card(p) {
    const d = discount(p), bo = bestOffer(p);
    const badge = d ? "-" + d + "%" : bo ? "وفّر حتى " + bo + "%" : "";
    return `
    <article class="card">
      <div class="card__img">
        ${badge ? `<span class="badge">${badge}</span>` : ""}
        <img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">
      </div>
      <div class="card__body">
        <h3 class="card__title">${esc(p.title)}</h3>
        <div class="price">
          <span class="price__now">${fmt(pr(p.price))}</span>
          ${d ? `<span class="price__old"><em>${esc(SITE.oldPriceLabel)}</em> <s>${fmt(pr(p.oldPrice))}</s></span>` : ""}
        </div>
        ${p.offers && p.offers.length ? `<div class="offers">${p.offers.map((o) => `<a class="offer" href="${esc(tgLink(p, o))}" target="_blank" rel="noopener"><b>${qtyLabel(o[0])}</b><span>${fmt(pr(o[1]))}</span><small>وفّر ${o[2]}%</small></a>`).join("")}</div>` : ""}
        <a class="btn btn--tg" href="${esc(tgLink(p))}" target="_blank" rel="noopener">${esc(SITE.orderBtn)}</a>
      </div>
    </article>`;
  }

  /* الواجهة */
  document.title = SITE.name;
  $("siteName").textContent = SITE.name;
  $("heroTitle").textContent = SITE.heroTitle;
  $("heroSub").textContent = SITE.heroSub;
  $("footText").textContent = SITE.footText;
  const tg = "https://t.me/" + SITE.telegram;
  $("footTg").href = tg;

  /* قايمة الخصومات */
  const hot = PRODUCTS.filter((p) => p.hot);
  if (hot.length) {
    $("hotTitle").textContent = SITE.hotTitle;
    $("hotRow").innerHTML = hot.map(card).join("");
  } else $("hotWrap").remove();

  /* المميزات و FAQ */
  $("perks").innerHTML = SITE.perks.map((x) => `<div class="perk"><span>${x.icon}</span><div><b>${esc(x.title)}</b><small>${esc(x.text)}</small></div></div>`).join("");
  if (SITE.faq.length) $("faq").innerHTML = SITE.faq.map((x) => `<details><summary>${esc(x.q)}</summary><p>${esc(x.a)}</p></details>`).join("");
  else $("faqWrap").remove();

  /* الأقسام */
  const cats = CATEGORIES.filter((c) => PRODUCTS.some((p) => p.category === c.id));
  $("nav").innerHTML = cats.map((c) => `<a href="#cat-${esc(c.id)}">${esc(c.name)}</a>`).join("");
  $("sections").innerHTML = cats.map((c) => `
    <section class="cat" id="cat-${esc(c.id)}">
      <h2 class="cat__title">${esc(c.name)}</h2>
      <div class="grid">${PRODUCTS.filter((p) => p.category === c.id).map(card).join("")}</div>
    </section>`).join("") + `<p class="empty" id="empty" hidden>مفيش منتجات مطابقة لبحثك.</p>`;

  /* البحث */
  $("search").addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    let any = false;
    document.querySelectorAll("#sections .card").forEach((el) => {
      const ok = el.querySelector(".card__title").textContent.toLowerCase().includes(q);
      el.hidden = !ok; if (ok) any = true;
    });
    document.querySelectorAll(".cat").forEach((s) => (s.hidden = !s.querySelector(".card:not([hidden])")));
    $("empty").hidden = any;
  });
})();
