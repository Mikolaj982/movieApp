import React from "react";


interface CarouselItemProps {
    readonly children?: React.ReactNode;
}

export const CarouselItem = ({ children }: CarouselItemProps) => (
    <li >{children}</li>
);
