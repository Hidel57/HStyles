import './text_field.css'

const TextField = (props) => {
    const {name, handleChange, inputValue} = props
    return (
      <div className='text-field'>
        <input className='input text-field__input'
          type='text' id='title' name='title'
          onChange={handleChange}
        //   value={inputValue.title}
        />
        <label className='text-field__label' htmlFor='title'>{name}</label>
      </div>
    );
}
 
export default TextField;