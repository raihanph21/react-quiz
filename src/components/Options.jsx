function Options({questions}) {
    return (
        <div className="options">
            {questions.options.map((x) => <button className="btn btn-option" key={x}>{x}</button>)}
        </div>

    )
}

export default Options
