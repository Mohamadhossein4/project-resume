import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './style.css' ;

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="page_404">
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
			<h1 className="text-7xl">404</h1>
		<div className="four_zero_four_bg w-full xl:w-1/2">
		
		
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<a href="/" className="link_404">Go to Home</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
  );
};

export default NotFound;
