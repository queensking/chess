export default class GameStart extends Laya.Script{
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