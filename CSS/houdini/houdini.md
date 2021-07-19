# Houdini 

* layoutWorklet
* paintWorklet
* animationWorklet
* audioWorklet

&nbsp;

&nbsp;


<table>
<caption>Worklet汇总</caption>
<thead><tr><th>名称</th>
<th>描述</th>
<th>位置</th>
<th>规范</th>
</tr></thead><tbody><tr><td><a href="/api/PaintWorklet.html" title=""><code>PaintWorklet</code></a></td>
<td>用于以编程方式生成 CSS 属性需要文件的图像。通过 <a title="" data-href="/api/CSS/paintWorklet.html"><code>CSS.paintWorklet</code></a> 访问此接口。</td>
<td><strong>Chrome：</strong> 主线程 <strong>Gecko：</strong> 绘画线程</td>
<td><a href="https://drafts.css-houdini.org/css-paint-api-1/#paint-worklet" class="external-link" target="_blank">CSS Painting API</a></td>
</tr><tr><td><a title="" data-href="/api/AudioWorklet.html"><code>AudioWorklet</code></a></td>
<td>用于使用自定义 AudioNode 进行音频处理。</td>
<td>网络音频渲染线程</td>
<td><a href="https://webaudio.github.io/web-audio-api/#AudioWorklet" class="external-link" target="_blank">Web Audio API</a></td>
</tr><tr><td><a title="" data-href="/api/AnimationWorklet.html"><code>AnimationWorklet</code></a></td>
<td>用于创建 "scroll-linked" 和其他高性能程序动画。</td>
<td>合成线程</td>
<td><a href="https://wicg.github.io/animation-worklet/" class="external-link" target="_blank">CSS Animation Worklet API</a></td>
</tr><tr><td><a title="" data-href="/api/LayoutWorklet.html"><code>LayoutWorklet</code></a></td>
<td>用于定义自定义元素的位置和尺寸。</td>
<td>-</td>
<td><a href="https://drafts.css-houdini.org/css-layout-api-1/#layout-worklet" class="external-link" target="_blank">CSS Layout API</a></td>
</tr></tbody></table>

&nbsp;

&nbsp;

&nbsp;

&nbsp;


<table border="0" width="100%" class="params_table" cellspacing="1">
<caption>表1 CSS Layout API中你需要了解的属性名称和含义</caption>
<thead>
<tr>
<th>属性名</th>
<th>对应含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>inlineSize</td>
<td>内联方向的尺寸，对应于<code>width</code>属性。</td>
</tr>
<tr>
<td>blockSize</td>
<td>块级方向的尺寸，对应于<code>height</code>属性。</td>
</tr>
<tr>
<td>inlineOffset</td>
<td>相对于容器元素在内联方向的偏移，默认是左侧偏移的大小。</td>
</tr>
<tr>
<td>blockOffset</td>
<td>块级方向的偏移，默认是顶部偏移的大小。</td>
</tr>
<tr>
<td>minContentSize</td>
<td>最小内容尺寸。</td>
</tr>
<tr>
<td>maxContentSize</td>
<td>最大内容尺寸。</td>
</tr>
<tr>
<td>availableInlineSize</td>
<td>可用内联方向的尺寸，通常表示可用宽度。</td>
</tr>
<tr>
<td>availableBlockSize</td>
<td>可用块级方向的尺寸，通常表示可用高度。</td>
</tr>
<tr>
<td>fixedInlineSize</td>
<td>固定的内联方向的尺寸，水平方向的宽度通常是可以确定的，因此即使没有设置<code>width</code>属性也是有值。</td>
</tr>
<tr>
<td>fixedBlockSize</td>
<td>固定的块级方向的尺寸，如果<code>height</code>设置的是<code>auto</code>，属性值会是<code>null</code>。</td>
</tr>
<tr>
<td>percentageInlineSize</td>
<td>内联方向的百分比尺寸。</td>
</tr>
<tr>
<td>percentageBlockSize</td>
<td>块级方向的百分比尺寸。</td>
</tr>
<tr>
<td>inlineStart</td>
<td>水平起始方向content box外边缘到border box外边缘的距离，在默认文档流下就是<code>padding-left</code>和<code>border-width-left</code>外加滚动条宽度（如果有）的计算值之和。</td>
</tr>
<tr>
<td>inlineEnd</td>
<td>水平结束方向content box外边缘到border box外边缘的距离。</td>
</tr>
<tr>
<td>blockStart</td>
<td>垂直起始方向content box外边缘到border box外边缘的距离。</td>
</tr>
<tr>
<td>blockEnd</td>
<td>垂直结束方向content box外边缘到border box外边缘的距离。</td>
</tr>
<tr>
<td>inline</td>
<td>整个水平方向content box外边缘到border box外边缘的距离之和。</td>
</tr>
<tr>
<td>block</td>
<td>整个垂直方向content box外边缘到border box外边缘的距离之和。</td>
</tr>
</tbody>
</table>

https://www.zhangxinxu.com/wordpress/2020/09/houdini-css-layout-api/
http://www.qiutianaimeili.com/html/page/2021/05/2034hrwuh8zln3n.html