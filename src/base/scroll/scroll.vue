<template>
<!-- 这里为了可以方便应用，设置ref属性 -->
    <div ref="wrapper">
    <!-- 这里放一个插槽，可以嵌套任何的dom -->
        <slot></slot>
    </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
    props:{
        //监听这个滚动事件，它是可以只有在缓慢拖动的时候能
        //能监听到还是快速拖动的时候监听的到
        probeType:{
            //这些属性都可以在官网中看到
           type:Number,
           default:1
        },
        //这个scroll组件是否可以被点击（是否需要手动派发点击事件）
        click:{
            type:Boolean,
            default:true
        },
        //我们的组件套的数据有可能是动态变化的，当数据变化的时候我们需要去refresh这个scroll，保证计算是正确的
        //所以当我们初始化一个scroll之后，数据变了如果我们不去refresh这个scroll，我们很可能会出现无法滚动的情况。
        data:{
            type:Array,
            default:null
        }
    },
    //什么时候调用它：必须等到mounted时期，也就是dom已经准备好的时候
    mounted(){
        //去将dom渲染
       setTimeout(()=>{
          this.refresh()
       },20)
    },
    //接下来初始化他的时期，我们在这里定义一个初始化他的方法
    methods:{
        _initScroll(){
      //实现scroll
      //如果$refs.wrapper还是undefined的时候，就直接返回
      if(!this.refs.wrapper){
             return
           }
    //如果我们在初始化的时候如果第一个参数是undefined的话，通常会报错，因此我们在这里先判断
    //此时开始初始化scrool
    this.scroll=new BScroll (this.$refs.wrapper,{
        probeType:this.probeType,
        click:this.click
    })
        },
    //也可以在b这个组件身上代理一些方法
    enable(){
        this.scroll&&this.scroll.enable()
    },
    disable(){
        this.scroll&&this.scroll.disable()
    },
    //去刷新scroll这个组件，重新计算它的高度
    refresh(){
      this.scroll&&this.scroll.refresh()
    }
    },
    //watch的好处：当data数据变化了，我们需要重新去计算这个scroll，我们需要重新调用他的refresh方法
    //如果这个refresh是需要触发放去调用的话，在每个调用方我们都需要去关心这个数据变化，需要手动去调用这个scroll.refresh
    //想实现组件内部自动刷新
    watch:{
        data(){
           setTimeout(()=>{
               this.refresh()
           },20)
        }
    }
}
</script>
>