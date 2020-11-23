import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { useBreakPoints } from "../../utils/useBreakPoints";

type Props = {
  src: string;
  mobileSrc?: string;
  tabletSrc?: string;
  alt: string;
  width: number;
  height: number;
};

const RawResponsiveImage: NextPage<Props> = ({
  src,
  mobileSrc,
  tabletSrc,
  alt,
  width,
  height,
}) => {
  const { isMobile, isTablet } = useBreakPoints();

  if (isMobile && mobileSrc) {
    return <Image src={mobileSrc} alt={alt} width={width} height={height} />;
  }
  if (isTablet && tabletSrc) {
    return <Image src={tabletSrc} alt={alt} width={width} height={height} />;
  }
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default RawResponsiveImage;
