export const extractVideoIdFromUrl = (url: string) => {
    let totalSplit = undefined;
    const firstSplit = url ? url.split('/') : '';

    if (firstSplit.length > 0) {
        totalSplit = firstSplit[3].split('=')[1];
    }

    return totalSplit ? totalSplit : '';
};
