# Basic実装例: FAQ

`index.html` のworkflowセクションとCTAセクションの間へ、次のHTMLを追加します。

```html
<section class="section faq" id="faq">
  <div class="container faq-grid">
    <div class="faq-heading">
      <p class="eyebrow"><span></span>FAQ</p>
      <h2>始める前の、よくある質問。</h2>
      <p>迷っていることがあれば、まずはこちらをご確認ください。</p>
    </div>

    <div class="faq-list">
      <details>
        <summary>無料期間のあと、料金はかかりますか？</summary>
        <p>14日間の無料期間が終わる前にプランをご案内します。自動で課金は始まりません。</p>
      </details>
      <details>
        <summary>いつでも解約できますか？</summary>
        <p>はい。契約期間の縛りはなく、設定画面からいつでも解約できます。</p>
      </details>
      <details>
        <summary>チームでも利用できますか？</summary>
        <p>利用できます。メンバーごとのタスクに加えて、チーム全体の進捗も共有できます。</p>
      </details>
    </div>
  </div>
</section>
```

`src/styles/components.css` へ追加するCSSの例です。

```css
.faq {
  background: var(--color-cream);
}

.faq-grid {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: var(--space-7);
}

.faq-heading h2 {
  margin-bottom: var(--space-3);
  font-size: clamp(2.3rem, 4vw, 3.75rem);
}

.faq-heading > p:last-child,
.faq-list details p {
  color: var(--color-ink-soft);
}

.faq-list {
  border-top: 1px solid var(--color-line);
}

.faq-list details {
  border-bottom: 1px solid var(--color-line);
}

.faq-list summary {
  position: relative;
  padding: 1.5rem 3rem 1.5rem 0;
  cursor: pointer;
  font-weight: 800;
  list-style: none;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list summary::after {
  position: absolute;
  top: 1.5rem;
  right: 0;
  display: grid;
  width: 1.8rem;
  height: 1.8rem;
  place-items: center;
  background: var(--color-lime);
  border-radius: 50%;
  content: "+";
}

.faq-list details[open] summary::after {
  content: "−";
}

.faq-list details p {
  max-width: 42rem;
  padding: 0 3rem 1.5rem 0;
  margin: 0;
}

@media (max-width: 767px) {
  .faq-grid {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }
}
```

この例では、JavaScriptを増やさず `details` と `summary` の標準動作を使います。実装後は `npm run build` とキーボード操作を確認してください。
