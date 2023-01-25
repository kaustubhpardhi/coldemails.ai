import "./Mailai.css";

function Mailai() {
  return (
    <div className="mail-card">
      <div className="mail-card-left">
        <div className="mail-details">
          <p className="mail-details-title">Furnish your mail</p>
          <div className="mail-details-purpose">
            <input type="radio" value="job" name="purpose" />
            <p className="mail-purpose-title">Job Hunting</p>
            <span className="span"></span>
            <input type="radio" value="showcase" name="purpose" />{" "}
            <p className="mail-purpose-title">Showcase Your Work</p>
          </div>
          <div className="mail-recipient">
            <p className="mail-recipient-title mail-left-title">
              Tell us something about your recipient
            </p>
            <input type="text" className="mail-input" name="recipient" />
          </div>
          <div className="mail-sender">
            <p className="mail-sender-title mail-left-title">
              Tell us what you do ➡ Your Profession
            </p>
            <input type="text" className="mail-input" name="recipient" />
          </div>
          <div className="mail-provide">
            <p className="mail-provide-title mail-left-title">
              Tell us what you can provide to the recipient
            </p>
            <input type="text" className="mail-input" name="recipient" />
          </div>
        </div>
      </div>
      <div className="mail-card-right">
        <p>right</p>
      </div>
    </div>
  );
}
export default Mailai;