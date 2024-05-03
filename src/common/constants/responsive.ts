interface ResponsiveType {
    [key: string]: {
        breakpoint: { max: number; min: number };
        items: number;
    };
}

export const responsive: ResponsiveType = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};