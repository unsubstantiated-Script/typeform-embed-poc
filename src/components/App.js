import "./App.css";
import NavComponent from "./shared/NavComponent";
import HeaderComponent from "./shared/HeaderComponent";
import SurveyComponent from "./survey/SurveyComponent";

function App() {
	return (
		<div className='container'>
			<NavComponent />
			<HeaderComponent />
			<SurveyComponent />
		</div>
	);
}

export default App;
