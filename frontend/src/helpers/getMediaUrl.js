export const getMediaUrl = (url) => {
	return `${process.env.REACT_APP_SERVER}/media/${url || "logo-no-text.png"}`;
};
