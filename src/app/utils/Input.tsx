export default function Input(){
    return(
        <>
            <fieldset className="fieldset">
                <legend className="fieldset-legend text-black">Page title</legend>
                <input type="text" className="input bg-white" placeholder="My awesome page" />
                <p className="label">You can edit page title later on from settings</p>
            </fieldset>
        </>
    );
}