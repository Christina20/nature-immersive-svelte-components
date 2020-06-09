import ViewDefault from './view.default.svelte';
import ViewConstrained from './view.constrained.svelte';
import cardData from '../preview-content/card-data.js';

const cardDataNoImage = Object.assign({}, cardData, {srcURL: undefined});
const cardDataNoAuthor = Object.assign({}, cardData, {authorName: undefined});
const cardDataNoAuthorNoJournal = Object.assign({}, cardData, {authorName: undefined, journal: undefined});

export default {
  title: 'Layout components/Card/CardBox',
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
	className: 'test',
	cardData,
  },
});

export const ConstrainedWidth = () => ({
  Component: ViewConstrained,
  props: {
	className: 'test',
	cardData,
  },
});

export const NoImage = () => ({
  Component: ViewConstrained,
  props: {
	className: 'test',
	cardData: cardDataNoImage,
  },
});

export const NoAuthor = () => ({
  Component: ViewConstrained,
  props: {
	className: 'test',
	cardData: cardDataNoAuthor,
  },
});

export const NoJournal = () => ({
  Component: ViewConstrained,
  props: {
	className: 'test',
	cardData: cardDataNoAuthorNoJournal,
  },
});
