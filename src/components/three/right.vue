<template>
  <div class="r-box">
    <div class="header">
      <div class="header_1" style="height: 19%">
        <div class="center-center">
          <img
            style="padding-left: 7px"
            src="../../assets/three/security.png"
            alt=""
          />
          <span>健康度</span>
        </div>
      </div>

      <el-carousel style="width: 100%; height: 78%">
        <el-carousel-item style="width: 100%; height: 100%" key="1">
          <div style="width: 100%; height: 100%" class="center-center">
            <div class="l center-center">
              <div style="width: 90%; height: 90%">
                <div
                  style="text-align: left; display: flex; align-items: center"
                >
                  <img src="../../assets/three/arrows.png" alt="" />
                  &nbsp;
                  <span
                    style="
                      font-size: 12px;
                      font-family: SourceHanSansCN;
                      font-weight: 500;
                      color: #1ac9ff;
                    "
                    >监控系统</span
                  >
                </div>
                <div class="center-center" style="width: 100%; height: 92%">
                  <div id="main" style="width: 153px; height: 153px"></div>
                  <div
                    class="center-center"
                    style="width: 58%; height: 170px; flex-wrap: wrap"
                  >
                    <div
                      class="guard-1"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[0].msg1 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        正常
                      </div>
                    </div>
                    <div
                      class="guard-2"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[0].msg2 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        离线
                      </div>
                    </div>
                    <div
                      class="guard-3"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[0].msg3 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        警告
                      </div>
                    </div>
                    <div
                      class="guard-4"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[0].msg4 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        保修
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="l center-center">
              <div style="width: 90%; height: 90%">
                <div
                  style="text-align: left; display: flex; align-items: center"
                >
                  <img src="../../assets/three/arrows.png" alt="" />
                  &nbsp;
                  <span
                    style="
                      font-size: 12px;
                      font-family: SourceHanSansCN;
                      font-weight: 500;
                      color: #1ac9ff;
                    "
                    >门禁系统</span
                  >
                </div>
                <div class="center-center" style="width: 100%; height: 92%">
                  <div id="main1" style="width: 153px; height: 153px"></div>
                  <div
                    class="center-center"
                    style="width: 58%; height: 170px; flex-wrap: wrap"
                  >
                    <div
                      class="guard-1"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[1].msg1 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        正常
                      </div>
                    </div>
                    <div
                      class="guard-2"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[1].msg2 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        离线
                      </div>
                    </div>
                    <div
                      class="guard-3"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[1].msg3 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        警告
                      </div>
                    </div>
                    <div
                      class="guard-4"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[1].msg4 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        保修
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="l center-center">
              <div style="width: 90%; height: 90%">
                <div
                  style="text-align: left; display: flex; align-items: center"
                >
                  <img src="../../assets/three/arrows.png" alt="" />
                  &nbsp;
                  <span
                    style="
                      font-size: 12px;
                      font-family: SourceHanSansCN;
                      font-weight: 500;
                      color: #1ac9ff;
                    "
                    >广播系统</span
                  >
                </div>
                <div class="center-center" style="width: 100%; height: 92%">
                  <div id="main2" style="width: 153px; height: 153px"></div>
                  <div
                    class="center-center"
                    style="width: 58%; height: 170px; flex-wrap: wrap"
                  >
                    <div
                      class="guard-1"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[2].msg1 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        正常
                      </div>
                    </div>
                    <div
                      class="guard-2"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[2].msg2 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        离线
                      </div>
                    </div>
                    <div
                      class="guard-3"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[2].msg3 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        警告
                      </div>
                    </div>
                    <div
                      class="guard-4"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[2].msg4 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        保修
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item key="2">
          <div style="width: 100%; height: 100%" class="center-center">
            <div class="l center-center">
              <div style="width: 90%; height: 90%">
                <div
                  style="text-align: left; display: flex; align-items: center"
                >
                  <img src="../../assets/three/arrows.png" alt="" />
                  &nbsp;
                  <span
                    style="
                      font-size: 12px;
                      font-family: SourceHanSansCN;
                      font-weight: 500;
                      color: #1ac9ff;
                    "
                    >监控系统</span
                  >
                </div>
                <div class="center-center" style="width: 100%; height: 92%">
                  <div id="main3" style="width: 153px; height: 153px"></div>
                  <div
                    class="center-center"
                    style="width: 58%; height: 170px; flex-wrap: wrap"
                  >
                    <div
                      class="guard-1"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[0].msg1 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        正常
                      </div>
                    </div>
                    <div
                      class="guard-2"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[0].msg2 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        离线
                      </div>
                    </div>
                    <div
                      class="guard-3"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[0].msg3 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        警告
                      </div>
                    </div>
                    <div
                      class="guard-4"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[0].msg4 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        保修
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="l center-center">
              <div style="width: 90%; height: 90%">
                <div
                  style="text-align: left; display: flex; align-items: center"
                >
                  <img src="../../assets/three/arrows.png" alt="" />
                  &nbsp;
                  <span
                    style="
                      font-size: 12px;
                      font-family: SourceHanSansCN;
                      font-weight: 500;
                      color: #1ac9ff;
                    "
                    >门禁系统</span
                  >
                </div>
                <div class="center-center" style="width: 100%; height: 92%">
                  <div id="main4" style="width: 153px; height: 153px"></div>
                  <div
                    class="center-center"
                    style="width: 58%; height: 170px; flex-wrap: wrap"
                  >
                    <div
                      class="guard-1"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[1].msg1 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        正常
                      </div>
                    </div>
                    <div
                      class="guard-2"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[1].msg2 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        离线
                      </div>
                    </div>
                    <div
                      class="guard-3"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[1].msg3 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        警告
                      </div>
                    </div>
                    <div
                      class="guard-4"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[1].msg4 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        保修
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="l center-center">
              <div style="width: 90%; height: 90%">
                <div
                  style="text-align: left; display: flex; align-items: center"
                >
                  <img src="../../assets/three/arrows.png" alt="" />
                  &nbsp;
                  <span
                    style="
                      font-size: 12px;
                      font-family: SourceHanSansCN;
                      font-weight: 500;
                      color: #1ac9ff;
                    "
                    >广播系统</span
                  >
                </div>
                <div class="center-center" style="width: 100%; height: 92%">
                  <div id="main5" style="width: 153px; height: 153px"></div>
                  <div
                    class="center-center"
                    style="width: 58%; height: 170px; flex-wrap: wrap"
                  >
                    <div
                      class="guard-1"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[2].msg1 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        正常
                      </div>
                    </div>
                    <div
                      class="guard-2"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[2].msg2 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        离线
                      </div>
                    </div>
                    <div
                      class="guard-3"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[2].msg3 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        警告
                      </div>
                    </div>
                    <div
                      class="guard-4"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[2].msg4 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        保修
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item key="3">
          <div style="width: 100%; height: 100%" class="center-center">
            <div class="l center-center">
              <div style="width: 90%; height: 90%">
                <div
                  style="text-align: left; display: flex; align-items: center"
                >
                  <img src="../../assets/three/arrows.png" alt="" />
                  &nbsp;
                  <span
                    style="
                      font-size: 12px;
                      font-family: SourceHanSansCN;
                      font-weight: 500;
                      color: #1ac9ff;
                    "
                    >监控系统</span
                  >
                </div>
                <div class="center-center" style="width: 100%; height: 92%">
                  <div id="main6" style="width: 153px; height: 153px"></div>
                  <div
                    class="center-center"
                    style="width: 58%; height: 170px; flex-wrap: wrap"
                  >
                    <div
                      class="guard-1"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[0].msg1 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        正常
                      </div>
                    </div>
                    <div
                      class="guard-2"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[0].msg2 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        离线
                      </div>
                    </div>
                    <div
                      class="guard-3"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[0].msg3 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        警告
                      </div>
                    </div>
                    <div
                      class="guard-4"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[0].msg4 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        保修
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="l center-center">
              <div style="width: 90%; height: 90%">
                <div
                  style="text-align: left; display: flex; align-items: center"
                >
                  <img src="../../assets/three/arrows.png" alt="" />
                  &nbsp;
                  <span
                    style="
                      font-size: 12px;
                      font-family: SourceHanSansCN;
                      font-weight: 500;
                      color: #1ac9ff;
                    "
                    >门禁系统</span
                  >
                </div>
                <div class="center-center" style="width: 100%; height: 92%">
                  <div id="main7" style="width: 153px; height: 153px"></div>
                  <div
                    class="center-center"
                    style="width: 58%; height: 170px; flex-wrap: wrap"
                  >
                    <div
                      class="guard-1"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[1].msg1 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        正常
                      </div>
                    </div>
                    <div
                      class="guard-2"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[1].msg2 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        离线
                      </div>
                    </div>
                    <div
                      class="guard-3"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[1].msg3 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        警告
                      </div>
                    </div>
                    <div
                      class="guard-4"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[1].msg4 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        保修
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="l center-center">
              <div style="width: 90%; height: 90%">
                <div
                  style="text-align: left; display: flex; align-items: center"
                >
                  <img src="../../assets/three/arrows.png" alt="" />
                  &nbsp;
                  <span
                    style="
                      font-size: 12px;
                      font-family: SourceHanSansCN;
                      font-weight: 500;
                      color: #1ac9ff;
                    "
                    >广播系统</span
                  >
                </div>
                <div class="center-center" style="width: 100%; height: 92%">
                  <div id="main8" style="width: 153px; height: 153px"></div>
                  <div
                    class="center-center"
                    style="width: 58%; height: 170px; flex-wrap: wrap"
                  >
                    <div
                      class="guard-1"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[2].msg1 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        正常
                      </div>
                    </div>
                    <div
                      class="guard-2"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[2].msg2 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        离线
                      </div>
                    </div>
                    <div
                      class="guard-3"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[2].msg3 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        警告
                      </div>
                    </div>
                    <div
                      class="guard-4"
                      style="
                        width: 72px;
                        height: 72px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          font-size: 31px;
                          font-family: DINAlternate;
                          font-weight: bold;
                          color: #ffffff;
                        "
                      >
                        {{ healthDegree[2].msg4 }}
                      </div>
                      <div
                        style="
                          font-size: 12px;
                          font-family: Adobe Heiti Std;
                          font-weight: normal;
                          color: #ffffff;
                        "
                      >
                        保修
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="center">
      <div
        class="left"
        style="display: flex; flex-direction: column; align-items: center"
      >
        <div class="header_1">
          <div class="center-center">
            <img
              style="padding-left: 8px"
              src="../../assets/three/123.png"
              alt=""
            />
            <span>设备数量统计</span>
          </div>
        </div>

        <div style="width: 95%; height: 78%" id="pie"></div>
      </div>
      <div class="right">
        <div class="header_1">
          <div class="center-center">
            <img
              style="padding-left: 17px"
              src="../../assets/three/qushi3.png"
              alt=""
            />
            <span>历史告警表格</span>
          </div>
        </div>

        <div style="width: 95%; height: 78%; margin: 0 auto">
          <el-table
            :data="tableData"
            max-height="222"
            style="width: 100%; dackground: transparent"
            :header-cell-style="{ background: '#1E4A75', color: '#F9FAFB' }"
          >
            <el-table-column prop="title" label="告警名称" align="center">
            </el-table-column>
            <el-table-column prop="grade" label="告警等级" align="center">
            </el-table-column>
            <el-table-column prop="time" label="告警时间" align="center">
            </el-table-column>
            <el-table-column prop="seat" label="告警位置" align="center">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="left">
        <div class="header_1">
          <div class="center-center">
            <img
              style="padding-left: 12px"
              src="../../assets/three/qushi3.png"
              alt=""
            />
            <span>告警数量统计</span>
          </div>
        </div>

        <div
          style="
            width: 100%;
            height: 78%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <div
            class="l"
            style="
              display: flex;
              flex-direction: column;
              justify-content: center;
            "
          >
            <div
              style="
                font-size: 50px;
                font-family: HiraginoSansGB;
                font-weight: normal;
                color: #0de5ff;
                line-height: 44px;
              "
            >
              {{ num[0] + num[1] + num[2] + num[3] }}
            </div>
            <div
              style="
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #ffffff;
                line-height: 24px;
              "
            >
              总数
            </div>
          </div>
          <div class="r">
            <div class="r-1 center-center">
              <span>
                一级告警
                <span style="color: #f02d2d; font-size: 14px">{{
                  num[0]
                }}</span>
                个
              </span>
            </div>
            <div class="r-2 center-center">
              <span>
                二级告警
                <span style="color: #ffc000; font-size: 14px">{{
                  num[1]
                }}</span>
                个
              </span>
            </div>
            <div class="r-3 center-center">
              <span>
                四级告警
                <span style="color: #21599d; font-size: 14px">{{
                  num[2]
                }}</span>
                个
              </span>
            </div>
            <div class="r-4 center-center">
              <span>
                四级告警
                <span style="color: #14e6ff; font-size: 14px">{{
                  num[3]
                }}</span>
                个
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="header_1">
          <div class="center-center">
            <img
              style="padding-left: 17px"
              src="../../assets/three/qushi3.png"
              alt=""
            />
            <span>日告警趋势</span>
          </div>
        </div>

        <div style="width: 100%; height: 78%" id="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "threeRight",

  data() {
    return {
      num: [3, 5, 0, 6],
      pieData: [
        { value: 150, name: "摄像头" },
        { value: 150, name: "广播设备" },
        { value: 150, name: "温度传感器" },
      ],
      tableData: [
        {
          title: "xxx事件",
          grade: "1",
          time: "2021-07-26",
          seat: "xx栋xx楼",
        },
        {
          title: "xxx事件",
          grade: "1",
          time: "2021-07-26",
          seat: "xx栋xx楼",
        },
        {
          title: "xxx事件",
          grade: "1",
          time: "2021-07-26",
          seat: "xx栋xx楼",
        },
        {
          title: "xxx事件",
          grade: "1",
          time: "2021-07-26",
          seat: "xx栋xx楼",
        },
      ],
      healthDegree: [
        {
          chart: 92,
          msg1: 60,
          msg2: 60,
          msg3: 60,
          msg4: 60,
        },
        {
          chart: 92,
          msg1: 60,
          msg2: 60,
          msg3: 60,
          msg4: 60,
        },
        {
          chart: 92,
          msg1: 60,
          msg2: 60,
          msg3: 60,
          msg4: 60,
        },
      ],
    };
  },
  mounted() {
    this.draw(92, "main");
    this.draw(92, "main1");
    this.draw(92, "main2");

    this.draw(92, "main3");
    this.draw(92, "main4");
    this.draw(92, "main5");

    this.draw(92, "main6");
    this.draw(92, "main7");
    this.draw(92, "main8");
    this.funpie();
    this.funline();
  },
  methods: {
   

    draw(v, dom) {
      let myChart = this.$echarts.init(document.getElementById(dom));
      let angle = 0; //角度，用来做简单的动画效果的
      let value = v;
      let option = {
        backgroundColor: "transparent",
        title: {
          text: "{a|" + value + "%}{c|\n \n 健康度} ",
          x: "center",
          y: "center",
          textStyle: {
            rich: {
              a: {
                fontSize: 22,
                color: "#18B1E5",
              },

              c: {
                fontSize: 20,
                color: "#ffffff",
              },
            },
          },
        },
        series: [
          {
            name: "ring5",
            type: "custom",
            coordinateSystem: "none",
            renderItem: function (params, api) {
              return {
                type: "arc",
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.9,
                  startAngle: ((0 + angle) * Math.PI) / 180,
                  endAngle: ((90 + angle) * Math.PI) / 180,
                },
                style: {
                  stroke: "#0CD3DB",
                  fill: "transparent",
                  lineWidth: 1.5,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: "ring5",
            type: "custom",
            coordinateSystem: "none",
            renderItem: function (params, api) {
              return {
                type: "arc",
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.9,
                  startAngle: ((180 + angle) * Math.PI) / 180,
                  endAngle: ((270 + angle) * Math.PI) / 180,
                },
                style: {
                  stroke: "#0CD3DB",
                  fill: "transparent",
                  lineWidth: 1.5,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: "ring5",
            type: "custom",
            coordinateSystem: "none",
            renderItem: function (params, api) {
              return {
                type: "arc",
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.95,
                  startAngle: ((270 + -angle) * Math.PI) / 180,
                  endAngle: ((40 + -angle) * Math.PI) / 180,
                },
                style: {
                  stroke: "#0CD3DB",
                  fill: "transparent",
                  lineWidth: 1.5,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: "ring5",
            type: "custom",
            coordinateSystem: "none",
            renderItem: function (params, api) {
              return {
                type: "arc",
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.95,
                  startAngle: ((90 + -angle) * Math.PI) / 180,
                  endAngle: ((220 + -angle) * Math.PI) / 180,
                },
                style: {
                  stroke: "#0CD3DB",
                  fill: "transparent",
                  lineWidth: 1.5,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: "ring5",
            type: "custom",
            coordinateSystem: "none",
            renderItem: (params, api) => {
              let x0 = api.getWidth() / 2;
              let y0 = api.getHeight() / 2;
              let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.95;
              let point = getCirlPoint(x0, y0, r, 90 + -angle);
              return {
                type: "circle",
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 4,
                },
                style: {
                  stroke: "#0CD3DB", //粉
                  fill: "#0CD3DB",
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: "ring5", //绿点
            type: "custom",
            coordinateSystem: "none",
            renderItem: (params, api) => {
              let x0 = api.getWidth() / 2;
              let y0 = api.getHeight() / 2;
              let r = (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.95;
              let point = getCirlPoint(x0, y0, r, 270 + -angle);
              return {
                type: "circle",
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 4,
                },
                style: {
                  stroke: "#1AC9FF", //绿
                  fill: "#1AC9FF",
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: "吃猪肉频率",
            type: "pie",
            radius: ["85%", "62%"],
            silent: true,
            clockwise: true,
            startAngle: 90,
            z: 0,
            zlevel: 0,
            label: {
              normal: {
                position: "center",
              },
            },
            data: [
              {
                value: value,
                name: "",
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: [
                        {
                          offset: 0,
                          color: "#4FADFD", // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#28E8FA", // 100% 处的颜色
                        },
                      ],
                    },
                  },
                },
              },
              {
                value: 100 - value,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#173164",
                  },
                },
              },
            ],
          },

          {
            name: "",
            type: "gauge",
            radius: "58%",
            center: ["50%", "50%"],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 4,
            hoverAnimation: true,
            axisTick: {
              show: false,
            },
            splitLine: {
              length: 92,
              lineStyle: {
                width: 5,
                color: "#061740",
              },
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                opacity: 0,
              },
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 0,
                name: "",
              },
            ],
          },
        ],
      };
        myChart.setOption(option, true);

      //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
      function getCirlPoint(x0, y0, r, angle) {
        let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
        let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
        return {
          x: x1,
          y: y1,
        };
      }

      function draw() {
        angle = angle + 3;
        myChart.setOption(option, true);
        //   window.requestAnimationFrame(draw);
      }

      setInterval(function () {
        //用setInterval做动画感觉有问题
        draw();
      }, 10);

      // angle = angle + 3;
      myChart.setOption(option, true);
      // window.requestAnimationFrame(draw);
    },
    funpie() {
      var chartDom = document.getElementById("pie");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "",
          subtext: "",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "right",
          top: "40%",
          textStyle: {
            color: ["#3F56C8", "#00F4FE", "#D54789"],
          },
        },
        color: ["#3F56C8", "#00F4FE", "#D54789"],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "70%"],
            data: this.pieData,
            label: {
              alignTo: "edge",
              formatter: "{name|{b}}\n{time|{c}}",
              minMargin: 5,
              edgeDistance: 10,
              lineHeight: 15,
              rich: {
                time: {
                  fontSize: 14,
                  color: "#999",
                },
                name: {
                  fontSize: 14,
                  color: "#fff",
                },
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    funline() {
      var chartDom = document.getElementById("line");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "单位/tce",
          left: 16,
          textStyle: {
            fontSize: 16,
            color: "#FFFFFF",
            opacity: 0.5,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#fff",
            },
          },
        },
        color: ["#F1FA00", "#0DE5FF"],
        legend: {
          data: ["同比", "环比"],
          left: 600,
          textStyle: {
            color: "#fff",
          },
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "06-01",
              "06-02",
              "06-03",
              "06-04",
              "06-05",
              "06-06",
              "06-07",
            ],
          },
        ],
        // yAxis: [
        //   {
        //     type: "value",
        //   },

        // ],
        yAxis: {
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "同比",
            type: "line",
            stack: "总量",
            areaStyle: {
              opacity: 0.5,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#F1FA00",
                },
                {
                  offset: 1,
                  color: "transparent",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [0, 3, 5, 8, 9, 15, 7],
          },
          {
            name: "环比",
            type: "line",
            stack: "总量",
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#0DE5FF",
                },
                {
                  offset: 1,
                  color: "transparent",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [6, 7, 2, 8, 0, 6, 15],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
<style src='./styles.css' scoped>
</style>