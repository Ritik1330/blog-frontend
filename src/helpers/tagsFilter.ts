
export const extractTexts = (data: any[]): string[] => {
    return data.map(keyword => keyword.text);
};
