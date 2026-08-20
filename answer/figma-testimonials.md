# Figma実装例: Testimonials

BasicでFAQを追加済みの場合は、workflowセクションとFAQセクションの間へ追加します。

```html
<section class="section testimonials" id="testimonials">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow"><span></span>VOICES</p>
      <h2>チームの毎日に、余白が生まれた。</h2>
      <p>TaskFlow AIを使うチームが感じた、仕事のリズムの変化をご紹介します。</p>
    </div>

    <div class="testimonial-grid">
      <figure class="testimonial-card testimonial-card-lime">
        <blockquote>「朝いちばんに優先順位が見えるので、迷わず仕事を始められるようになりました。」</blockquote>
        <figcaption><span>AN</span><p><strong>青木 奈緒</strong><small>プロダクトマネージャー</small></p></figcaption>
      </figure>
      <figure class="testimonial-card testimonial-card-blue">
        <blockquote>「状況確認のミーティングが減り、チームで考える時間をきちんと取れています。」</blockquote>
        <figcaption><span>SK</span><p><strong>佐久間 健</strong><small>エンジニアリングマネージャー</small></p></figcaption>
      </figure>
      <figure class="testimonial-card testimonial-card-orange">
        <blockquote>「会議メモからタスクが整理されるので、抜け漏れへの不安がかなり軽くなりました。」</blockquote>
        <figcaption><span>MO</span><p><strong>森川 央</strong><small>カスタマーサクセス</small></p></figcaption>
      </figure>
    </div>
  </div>
</section>
```

`src/styles/components.css` へ追加するCSSの例です。

```css
.testimonials {
  background: var(--color-surface);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.testimonial-card {
  display: flex;
  min-height: 20rem;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-5);
  margin: 0;
  border-radius: var(--radius-lg);
}

.testimonial-card-lime { background: var(--color-lime-soft); }
.testimonial-card-blue { background: var(--color-blue-soft); }
.testimonial-card-orange { background: var(--color-orange-soft); }

.testimonial-card blockquote {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.7;
}

.testimonial-card figcaption {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.testimonial-card figcaption > span {
  display: grid;
  width: 2.75rem;
  height: 2.75rem;
  place-items: center;
  color: var(--color-white);
  background: var(--color-ink);
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: 900;
}

.testimonial-card figcaption p,
.testimonial-card strong,
.testimonial-card small {
  display: block;
  margin: 0;
}

.testimonial-card strong { font-size: 0.875rem; }
.testimonial-card small { color: var(--color-ink-soft); font-size: 0.75rem; }

@media (max-width: 767px) {
  .testimonial-grid { grid-template-columns: 1fr; }
  .testimonial-card { min-height: 17rem; }
}
```

実装例はFigmaの値を既存CSS Variablesへ対応づけています。Figmaで値が更新された場合は、この例より実際のフレームを優先してください。
