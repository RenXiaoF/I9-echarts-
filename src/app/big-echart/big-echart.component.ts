import { Component, OnInit, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-big-echart',
  templateUrl: './big-echart.component.html',
  styleUrls: ['./big-echart.component.scss']
})
export class BigEchartComponent implements OnInit {

  nowTime: number = new Date().getTime();
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }
  @ViewChild('wrap', { static: false }) wrap: ElementRef;

  T: any;

  ngOnInit() {
    setInterval(() => this.nowTime = this.nowTime + 1000, 1000);
  }

  // 监听 window.resize 对 整个画面进行缩放
  @HostListener('window:resize', ['$event'])
  onReset(event: any) {
    if (this.T) {
      clearTimeout(this.T);
    }
    this.T = setTimeout(() => {
      // 获取待缩放节点
      const dom = this.el.nativeElement.querySelector('.wrap');
      const windowWidth = window.innerWidth;
      const scale = (windowWidth || 1920) / 1920;
      this.renderer.setStyle(dom, 'transform', `scale(${scale})`);
    }, 300);
  }

  ngAfterViewInit(): void {
    // 网页加载完成重置画面
    // this.onReset(true);

  //   const paiChanSection = this.el.nativeElement.querySelector('.paichan-section');
  //   const paichan = this.el.nativeElement.querySelector('.paichan');
  //   const paichanScale = 480 / 1920;
  //   this.renderer.setStyle(paichan, 'position', `absolute`);
  //   this.renderer.setStyle(paichan, 'top', `0`);
  //   this.renderer.setStyle(paichan, 'left', `0`);
  //   this.renderer.setStyle(paichan, 'transform', `scale(${paichanScale})`);
  //   this.renderer.setStyle(paiChanSection, 'width', `480px`);
  }


}
