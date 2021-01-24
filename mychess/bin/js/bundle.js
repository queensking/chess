(function () {
    'use strict';

    class GameStart extends Laya.Script{
        constructor(){
            super();

            let initType=1000;

            let numType=1000;

            let strType="hello laya";

            let boolType=true;

            let Scene=null;
        }

        onAwake(){
            Laya.Scene3D.load("res/chessScene/Conventional/SampleScene.ls",Laya.Handler.create(this,this.onSceneLoaded));
        }

        onSceneLoaded(loadScene){
            
            // var zhuzi = loadScene.addChild(Laya.Loader.getRes("res/chessScene/Conventional/Assets/Materials/redTrans.lmat"));
            // // var zhuzi = loadScene.getChildByName("main");
            // var zhuzi1 = Laya.Sprite3D.instantiate(zhuzi, this.loadScene, true, new Laya.Vector3(2, 3, 3));
            Laya.stage.addChild(loadScene);

            this.Scene=loadScene;

            //获取摄像机
            var camera = loadScene.getChildByName("Main Camera");

            camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY;
            // camera.transform.rotate(new Laya.Vector3(0, 0, 3), true, true);
            camera.transform.translate(new Laya.Vector3(0, 0, -10),false);

           

            // var zhuzi2 = this.loadScene.addChild(Laya.Sprite3D.instantiate(zhuzi, null, false, new Laya.Vector3( -3, 0, 0)));
            

            //添加光照
            // var directionLight = loadScene.addChild(new Laya.DirectionLight());
            // directionLight.color = new Laya.Vector3(1, 1, 1);
            // directionLight.transform.rotate(new Laya.Vector3( -3.14 / 3, 0, 0));
            //获取红棋
            var chessRoot = loadScene.getChildByName("redTrans50");
            var chess1 = Laya.Sprite3D.instantiate(chessRoot, this.loadScene, true, new Laya.Vector3(12, 12, 12));
        }

        onMouseDown(e){
            // Laya.Scene3D.load("res/chessScene/Conventional/SampleScene.ls",Laya.Handler.create(this,this.onSceneLoaded));
            debugger;
            var c = this.Scene.getChildByName("Main Camera");
            c.transform.rotate(new Laya.Vector3(1, -1, -3), true, false);

            
        }

        onMouseClick(onSceneLoaded){
            
            //获取摄像机
            // var camera = loadScene.getChildByName("Main Camera");
            
            //console.log("点击到了我box",owner.name);
            //从父容器销毁我自己
            // camera.transform.rotate(new Laya.Vector3(-20, 0, 0), true, false);
            var c = this.Scene.getChildByName("Main Camera");
            c.transform.rotate(new Laya.Vector3(-2, 0, 0), true, false);
        }
    }

    /**This class is automatically generated by LayaAirIDE, please do not make any modifications. */

    class GameConfig {
        static init() {
            //注册Script或者Runtime引用
            let reg = Laya.ClassUtils.regClass;
    		reg("scripts/GameStart.js",GameStart);
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode ="fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "startScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;

    GameConfig.init();

    class Main {
    	constructor() {
    		//根据IDE设置初始化引擎		
    		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
    		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
    		Laya["Physics"] && Laya["Physics"].enable();
    		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
    		Laya.stage.scaleMode = GameConfig.scaleMode;
    		Laya.stage.screenMode = GameConfig.screenMode;
    		Laya.stage.alignV = GameConfig.alignV;
    		Laya.stage.alignH = GameConfig.alignH;
    		//兼容微信不支持加载scene后缀场景
    		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

    		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
    		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
    		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
    		if (GameConfig.stat) Laya.Stat.show();
    		Laya.alertGlobalError(true);

    		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
    		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    	}

    	onVersionLoaded() {
    		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
    		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    	}

    	onConfigLoaded() {
    		//加载IDE指定的场景
    		GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
    	}
    }
    //激活启动类
    new Main();

}());
