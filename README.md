# cordova-plugin-beecloud
BeeCloud支付的Cordova插件

### 安装
`cordova plugin add https://github.com/eyre/cordova-plugin-beecloud.git --variable APP_ID=your_app_id --variable TEST_SECRET=your_test_secret --variable APP_SECRET=your_app_secret`

使用时注意包名修改

### 插件调用
```
...
declare var BeeCloudPlugin: any;
...
...
    BeeCloudPlugin.init(
	    succ=>{
	    	alert(succ);
	    },
	    err=>{
	    	alert(err);
	    }
    );

    BeeCloudPlugin.ali_pay('测试商品',1,'2017091918252130',null,
	    succ=>{
	    	// alert('init success');
	    	alert(succ);
	    },
	    err=>{
	    	// alert('init error')
	    	alert(err);
	    }
    );
  ...

```