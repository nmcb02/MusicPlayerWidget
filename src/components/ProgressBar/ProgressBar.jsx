export default function ProgressBar({ progress }) {
    return (
        <div className="progressBarContainer">
            <progress id="progressBar" value="0" max="100"></progress>
        </div>
    );
}