/** @format */

export default function SelectField({ label, options ,name, ...props }) {
  return (
    <div className='input'>
      <label className='label' htmlFor='location'>
        {label}
      </label>
      <div className='select'>
        <select className='Select-re' {...props}>
          <option value=''>{name}</option>

          {options?.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
