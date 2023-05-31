/** @format */

import React from "react";
import Header from "../components/Layout/Header";
import img from "../Images/i.png";
import img1 from "../Images/32.png";

const CurrencyConvertor = () => {
  return (
    <>
      <Header />

      <div className="Currency_Convertor">
        <div className="left_container">
          <p className="Head">USD to INR Currency Converter with Live Rate</p>

          <div className="upper">
            <p className="head">USD-INR Currency Converter</p>
            <p className="sub_head">1 USD = 82.40 INR</p>
            <p className="desc">
              Interbank/ mid-market Rate at: 17-02-2023 16:42:17
            </p>
            <div className="two_Div">

              <div className="item">
                <input type="number" placeholder="Enter USD Amount" />
                <div className="two">
                  <img src={img} alt="" />
                  <p>US Dollar</p>
                </div>
              </div>

              <img src={img1} alt="" className="convertorImg" />
              <div className="item">
                <input type="number" placeholder="Enter INR Amount" />
                <div className="two">
                  <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAAkFBMVEX/mTMSiAf///8AAIj/u3dgmSxwcLy7u9+qqteNjcpiYrbExONMTKt3d8AfH5bk5PLb2+4uLp3MzOf5+fzr6/Y2NqEKCo0oKJskJJl/f8Pd3e/u7veystvDw+P29vuSksyamtA5OaMUFJFWVrCvr9pfX7TT0+pPT61GRqmHh8ekpNVoaLhBQaaPj8sbG5VaWrJBmMX4AAAEL0lEQVR4nO2a6XbaSBBGne4ZrWhFC0IghBFiM/D+b5dqwdjjeJzkR6bkQ33XBwwS9qlLb9XL0xMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvhx/yeZJyQb+soG/bEb0jxau5W08y11E4wUxln9qlfqN0kpHimMcfyfRP5J3o0Qyhr9/s09OOkz9NNSn+/sx6gC//9QabC9Rpvq5itW8V1n0PFyzpuzRsPtHOYnOnKpVqbG1zbVUtZUzM42AvSfk9p8bTauu6WW2pKeWHsuMnura1IswZo6H2T8KtS50dyt2lx7V/bdaKofu6MucNyBe/3pmijg1Yz+9s+jh3X93VPPTmG6XNWtEvP47KuB4aOMV1XmXGsCeSp7KPzuYi9mcqseGNSJW/5Za+FWZ8lcRFfySCr6k4qevwTNfShqrK32i5QyJ0z+jUS6kgrYdemN1qgmVKpQKa7UwTWBBncKBKsBzxhgTp/9J693w4kg1PprVqvQb3fgldQtU/KvjcG9CwwNjTIz+UaGL+Da+VaRoeWprZTqztsqjt9XQA6i4p08xZgGM/pXWazVdmMqvrE2TFfbqEus4XNlFNr2ezGXbmSrKjyq+oBj9qWlrKtneo29gunupg9DXNv34YdDsJ5QM2p4ZGU0WxBcUn39KM5wh7Zkeckc166R/XiVd0SWr5z5ZN8peB0P6b9NsiG8mxOd/0Nq9v4xfEicr8262Oq/Pq9LJy8zO1/3bBw9sUfH5U8eezu12YUa3qVvk/u4adEEQOIG3t/PCNYVfL4/2nCrKhC0qPn9q/ibpXVr5pLKbeFK0h3YTFuFkFayKSTxNz9uX7YK+hQXND9miYvNvtOn+B3zropNqGXibYda/OZ3sKtEXy7/dXtM1toUANn/q15O3ya0f7GcT97705U5m+8B/vRdTB8iWArL5x5T8NVGf2k7rVpa3sVzndPc/Oa618azKbR077aOGZklsywDwZ+In9f8sof7/V/+3G/R3Ivo/M/6Z9O/d+Hel8W8nY/z7kP/Y++2Q/3SB9/Iu//EfM//5V1r7T/5bfpb/up/9kz8O7/zHJIC/mv8sHnT+o2a/Pf/la/4jrH8M+5yfrH8sH3n9Iyt00Qte/5K+/vlb69+XB17//nH/wxa2/3Hf/xqK1+x/HfwP+1+Xh97/UnVJLaCXu/953/92pO5//+z8Q3YScP6BaoCZ3s6OH86/HM32yJqz6x8Y9fxTOpx/Sl/PPwUCzj8RaX479Ph6/u12FDKXcf7N0OWSzz8a+uDd+deg//Wf/C98gfPPZ4nnn78K8JcN/GXz9Ldsnr7JBv6ygb9s4C8b+MsG/rKBv2zgLxv4ywb+soG/bOAvG/jLBv6ygb9s4C8b+MsG/rKBv2zgLxv4ywb+soG/bOAvG/jLBv6ygb9s4C8b6f7fAYUo+r9l75WeAAAAAElFTkSuQmCC'} alt="" />
                  <p>US Dollar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right_container"></div>
      </div>
    </>
  );
};

export default CurrencyConvertor;
