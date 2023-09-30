import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IOSKeyboardLightAlphabetic = ({
  shift,
  iOSKeyboardLightAlphabetiPosition,
  iOSKeyboardLightAlphabetiMarginLeft,
  iOSKeyboardLightAlphabetiBottom,
  iOSKeyboardLightAlphabetiLeft,
}) => {
  const iOSKeyboardLightAlphabeticStyle = useMemo(() => {
    return {
      ...getStyleValue("position", iOSKeyboardLightAlphabetiPosition),
      ...getStyleValue("marginLeft", iOSKeyboardLightAlphabetiMarginLeft),
      ...getStyleValue("bottom", iOSKeyboardLightAlphabetiBottom),
      ...getStyleValue("left", iOSKeyboardLightAlphabetiLeft),
    };
  }, [
    iOSKeyboardLightAlphabetiPosition,
    iOSKeyboardLightAlphabetiMarginLeft,
    iOSKeyboardLightAlphabetiBottom,
    iOSKeyboardLightAlphabetiLeft,
  ]);

  return (
    <View
      style={[
        styles.ioskeyboardlightalphabetic,
        iOSKeyboardLightAlphabeticStyle,
      ]}
    >
      <View style={[styles.background, styles.backgroundPosition]}>
        <View style={[styles.background1, styles.backgroundPosition]} />
      </View>
      <View style={[styles.homeIndicator, styles.backgroundPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <View style={styles.keys}>
        <Image
          style={styles.dictationIcon}
          contentFit="cover"
          source={require("../assets/dictation.png")}
        />
        <Image
          style={styles.emojiIcon}
          contentFit="cover"
          source={require("../assets/emoji.png")}
        />
        <View style={[styles.return, styles.viewPosition]}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Go</Text>
        </View>
        <View style={[styles.space, styles.viewPosition]}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle1.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>space</Text>
        </View>
        <View style={[styles.view, styles.viewPosition]}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle2.png")}
          />
          <Text style={[styles.label2, styles.labelTypo]}>123</Text>
        </View>
        <View style={[styles.delete, styles.shiftPosition]}>
          <View style={[styles.background, styles.backgroundPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle3.png")}
            />
            <Text style={[styles.label3, styles.labelTypo]}>{` `}</Text>
          </View>
          <Image
            style={styles.deleteButtonIcon}
            contentFit="cover"
            source={require("../assets/delete-button.png")}
          />
        </View>
        <View style={[styles.shift, styles.shiftPosition]}>
          <View style={[styles.background, styles.backgroundPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>{` `}</Text>
          </View>
          <Image
            style={[styles.shiftIcon, styles.iconLayout]}
            contentFit="cover"
            source={shift}
          />
        </View>
        <View style={[styles.m, styles.mPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol1, styles.symbolTypo]}>M</Text>
        </View>
        <View style={[styles.n, styles.nPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>N</Text>
        </View>
        <View style={[styles.b, styles.bPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>B</Text>
        </View>
        <View style={[styles.v, styles.vPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>V</Text>
        </View>
        <View style={[styles.c, styles.cPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>C</Text>
        </View>
        <View style={[styles.x, styles.xPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>X</Text>
        </View>
        <View style={[styles.z, styles.zPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>Z</Text>
        </View>
        <View style={[styles.l, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol8, styles.symbolTypo]}>L</Text>
        </View>
        <View style={[styles.k, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>K</Text>
        </View>
        <View style={[styles.j, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol8, styles.symbolTypo]}>J</Text>
        </View>
        <View style={[styles.h, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>H</Text>
        </View>
        <View style={[styles.g, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>G</Text>
        </View>
        <View style={[styles.f, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol8, styles.symbolTypo]}>F</Text>
        </View>
        <View style={[styles.d, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>D</Text>
        </View>
        <View style={[styles.s, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>S</Text>
        </View>
        <View style={[styles.a, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>A</Text>
        </View>
        <View style={[styles.p, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>P</Text>
        </View>
        <View style={[styles.o, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol18, styles.symbolTypo]}>O</Text>
        </View>
        <View style={[styles.i, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol19, styles.symbolTypo]}>I</Text>
        </View>
        <View style={[styles.u, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolTypo]}>U</Text>
        </View>
        <View style={[styles.y, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>Y</Text>
        </View>
        <View style={[styles.t, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>T</Text>
        </View>
        <View style={[styles.r, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>R</Text>
        </View>
        <View style={[styles.e, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolTypo]}>E</Text>
        </View>
        <View style={[styles.w, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol25, styles.symbolTypo]}>W</Text>
        </View>
        <View style={[styles.q, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol18, styles.symbolTypo]}>Q</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    bottom: "0%",
    width: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  viewPosition: {
    bottom: "21.24%",
    top: "62.55%",
    height: "16.22%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  labelTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.sFProText,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: "26.19%",
    left: 0,
    position: "absolute",
  },
  shiftPosition: {
    bottom: "42.08%",
    top: "41.7%",
    width: "11.38%",
    height: "16.22%",
    position: "absolute",
  },
  symbolTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    marginTop: -13,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.sFProText,
    position: "absolute",
  },
  mPosition: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  nPosition: {
    left: "66.12%",
    right: "25.2%",
  },
  bPosition: {
    left: "55.83%",
    right: "35.5%",
  },
  vPosition: {
    left: "45.8%",
    right: "45.53%",
  },
  cPosition: {
    left: "35.5%",
    right: "55.83%",
  },
  xPosition: {
    left: "25.47%",
    right: "65.85%",
  },
  zPosition: {
    left: "15.18%",
    right: "76.15%",
  },
  lPosition: {
    bottom: "62.93%",
    top: "20.85%",
    width: "8.67%",
    height: "16.22%",
    position: "absolute",
  },
  pPosition: {
    bottom: "83.78%",
    width: "8.67%",
    height: "16.22%",
    top: "0%",
    position: "absolute",
  },
  background1: {
    backgroundColor: Color.colorLightgray_100,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
  },
  background: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    height: "11.68%",
    top: "88.32%",
    left: "0%",
    bottom: "0%",
    width: "100%",
  },
  dictationIcon: {
    width: 15,
    height: 25,
  },
  emojiIcon: {
    width: 27,
    height: 27,
  },
  rectangleIcon: {
    bottom: -1,
    borderRadius: Border.br_8xs_6,
    left: 0,
    right: 0,
    top: 0,
    overflow: "hidden",
    maxWidth: "100%",
  },
  label: {
    width: 88,
  },
  return: {
    width: "23.85%",
    left: "76.15%",
    right: "0%",
  },
  label1: {
    width: 182,
  },
  space: {
    width: "49.32%",
    right: "25.47%",
    left: "25.2%",
  },
  label2: {
    width: 87,
  },
  view: {
    width: "23.58%",
    right: "76.42%",
    left: "0%",
  },
  label3: {
    width: 42,
  },
  deleteButtonIcon: {
    width: 23,
    height: 17,
  },
  delete: {
    left: "88.62%",
    right: "0%",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorGray_100,
    bottom: 0,
    borderRadius: Border.br_8xs_6,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  symbol: {
    left: "48.07%",
  },
  shiftIcon: {
    height: "39.18%",
    width: "44.95%",
    top: "29.05%",
    right: "27.29%",
    bottom: "31.77%",
    left: "27.76%",
  },
  shift: {
    right: "88.62%",
    left: "0%",
  },
  symbol1: {
    left: "18.75%",
  },
  m: {
    right: "14.91%",
    left: "76.42%",
  },
  symbol2: {
    left: "25%",
  },
  n: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol3: {
    left: "28.13%",
  },
  b: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  v: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  c: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  x: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  z: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol8: {
    left: "31.25%",
  },
  l: {
    right: "4.88%",
    left: "86.45%",
  },
  k: {
    right: "15.18%",
    left: "76.15%",
  },
  j: {
    left: "66.12%",
    right: "25.2%",
  },
  h: {
    left: "55.83%",
    right: "35.5%",
  },
  g: {
    left: "45.8%",
    right: "45.53%",
  },
  f: {
    left: "35.5%",
    right: "55.83%",
  },
  d: {
    left: "25.47%",
    right: "65.85%",
  },
  s: {
    left: "15.18%",
    right: "76.15%",
  },
  a: {
    right: "86.18%",
    left: "5.15%",
  },
  p: {
    left: "91.33%",
    right: "0%",
  },
  symbol18: {
    left: "21.88%",
  },
  o: {
    right: "10.03%",
    left: "81.3%",
  },
  symbol19: {
    left: "40.63%",
  },
  i: {
    right: "20.33%",
    left: "71%",
  },
  u: {
    right: "30.35%",
    left: "60.98%",
  },
  y: {
    right: "40.65%",
    left: "50.68%",
  },
  t: {
    right: "50.68%",
    left: "40.65%",
  },
  r: {
    right: "60.98%",
    left: "30.35%",
  },
  e: {
    right: "71%",
    left: "20.33%",
  },
  symbol25: {
    left: "15.63%",
  },
  w: {
    right: "81.3%",
    left: "10.03%",
  },
  q: {
    right: "91.33%",
    left: "0%",
  },
  keys: {
    height: "89%",
    width: "98.4%",
    top: "2.75%",
    right: "0.8%",
    bottom: "8.25%",
    left: "0.8%",
    position: "absolute",
  },
  ioskeyboardlightalphabetic: {
    backgroundColor: Color.colorLightgray_200,
    width: 375,
    height: 291,
  },
});

export default IOSKeyboardLightAlphabetic;
