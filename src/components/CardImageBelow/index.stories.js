import ViewDefault from "./index.svelte";
import CardImageBelow from "./view.constrained.svelte";
import cardData from "../preview-content/card-data.js";
import docs from "./docs.mdx";

export default {
  title: "Layout components/Card/CardImageBelow",
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const Default = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
    cardData,
  },
});

export const ImageOnRight = () => ({
  Component: ViewDefault,
  props: {
    className: "test",
	sidebarOnLeft: false,
    cardData,
  },
});

export const ConstrainedWidth = () => ({
  Component: CardImageBelow,
  props: {
    className: "test",
    stackSpace: "var(--s-1)" /* default */,
    sidebarWidth: "20ch" /* default */,
    sidebarContentMinWidth: "50%;" /* default */,
    sidebarSpace: "var(--s-1)" /* default */,
    sidebarOnLeft: true /* default */,
    cardData: {
      authorName: "Author Name <i>et al</i>.",
      journal: "<span class='test'>Journal</span> Name",
      altText: "This is the alt text",
      caption: "This is the caption",
      srcURL: "img/image.jpg",
      captionSpace: "" /* What is this? */,
      footnote: "Footnote",
      headline: "Headline",
      href: "https://www.nature.com",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
    },
  },
});

export const NoImage = () => ({
  Component: CardImageBelow,
  props: {
    className: "test",
    cardData: {
      authorName: "Author Name <i>et al</i>.",
      journal: "<span class='test'>Journal</span> Name",
      altText: "This is the alt text",
      caption: "This is the caption",
      srcURL: undefined,
      captionSpace: "" /* What is this? */,
      footnote: "Footnote",
      headline: "Headline",
      href: "https://www.nature.com",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
    },
  },
});

export const NoAuthor = () => ({
  Component: CardImageBelow,
  props: {
    className: "test",
    cardData: {
      authorName: undefined,
      journal: "<span class='test'>Journal</span> Name",
      altText: "This is the alt text",
      caption: "This is the caption",
      srcURL: "img/image.jpg",
      captionSpace: "" /* What is this? */,
      footnote: "Footnote",
      headline: "Headline",
      href: "https://www.nature.com",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
    },
  },
});

export const NoJournal = () => ({
  Component: CardImageBelow,
  props: {
    className: "test",
    cardData: {
      authorName: "Author Name <i>et al</i>.",
      journal: undefined,
      altText: "This is the alt text",
      caption: "This is the caption",
      srcURL: "img/image.jpg",
      captionSpace: "" /* What is this? */,
      footnote: "Footnote",
      headline: "Headline",
      href: "https://www.nature.com",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum.",
    },
  },
});