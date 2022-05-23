export const data = [

	{
		title: 'Número de eleitores',
		description:
			'170.856',
		url: '2021',
		src: "https://img.icons8.com/dotty/80/4a90e2/identification-documents.png",
	},
	{
		title: 'PIB per capita',
		description:
			'R$ 110.604,10',
		url: '2019',
		src: "https://img.icons8.com/dotty/80/4a90e2/cash-.png",
	},
	{
		title: 'Indice de Desenvolvimento Humano',
		description:
			'0.715',
		url: '2019',
		src: "https://img.icons8.com/dotty/80/4a90e2/personal-growth.png",	},
	{
		title: 'Estimativa da População',
		description:
			'218.687',
		url: '2021',
		src: "https://img.icons8.com/dotty/80/4a90e2/global-citizen.png",
	
	},
	{
		title: 'Área teritorial',
		description:
			'6.885.794 KM<sup>2</sup>',
			url: '2020',
			src: "https://img.icons8.com/dotty/80/4a90e2/country.png",
	},
	{
		title: 'Densidade Demográfica',
		description:
			'31,77hab/KM<sup>2</sup>',
		url: '2021',
		src: "https://img.icons8.com/dotty/80/4a90e2/country.png",
	},
];


function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block", background: "blue" }}
		onClick={onClick}
	  />
	);
  }
  
  function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block", background: "blue", height: "18px" }}
		onClick={onClick}
	  />
	);
  }
  
export const sliderSettings = {
	infinite: false,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	initialSlide: 1,
	infinite: true,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 4,
				swipeToSlide: true,
				slidesToScroll: 1,
				initialSlide: 1,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
				swipeToSlide: true,
				slidesToScroll: 1,
				arrows: true,
				className: "center",
				centerMode: true,
				infinite: true,
				centerPadding: "50px",
			},
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 1,
				swipeToSlide: true,
				slidesToScroll: 1,
				arrows: true,
				className: "center",
				centerMode: true,
				infinite: true,
				centerPadding: "50px",
			},
		},
	],
};
