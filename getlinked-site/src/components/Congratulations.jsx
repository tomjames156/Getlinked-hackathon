import successfulMan from '../assets/images/people/successful-man.png'
import successfullyDone from '../assets/images/animated/successfully-done.png'

function Congratulations() {
  return (
    <section className='congratulations'>
        <div>
            <div>
                <img src={successfullyDone} alt="check mark" />
                <img src={successfulMan} alt="man celebrating successfully registered" />
            </div>
            <h2>Congratulations<br/> you have successfully Registered!</h2>
            <p>Yes, it was easy and you did it!<br/> check your mail box for next step</p>
            <button className='btn-primary'>Back</button>
        </div>
    </section>
  )
}

export default Congratulations