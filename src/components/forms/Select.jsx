import Style from './Select.module.css';

function Select({name, text}) {
    return (
        <div>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option value="">Selecione um gênero</option>
                {/* Gêneros de Rock */}
                <optgroup label="Rock">
                    <option value="classic-rock">Classic Rock</option>
                    <option value="hard-rock">Hard Rock</option>
                    <option value="punk-rock">Punk Rock</option>
                    <option value="alternative-rock">Alternative Rock</option>
                    <option value="indie-rock">Indie Rock</option>
                    <option value="progressive-rock">Progressive Rock</option>
                    <option value="psychedelic-rock">Psychedelic Rock</option>
                    <option value="southern-rock">Southern Rock</option>
                    <option value="garage-rock">Garage Rock</option>
                    <option value="glam-rock">Glam Rock</option>
                    <option value="surf-rock">Surf Rock</option>
                    <option value="art-rock">Art Rock</option>
                </optgroup>

                {/* Gêneros de Metal */}
                <optgroup label="Metal">
                    <option value="heavy-metal">Heavy Metal</option>
                    <option value="thrash-metal">Thrash Metal</option>
                    <option value="death-metal">Death Metal</option>
                    <option value="black-metal">Black Metal</option>
                    <option value="doom-metal">Doom Metal</option>
                    <option value="power-metal">Power Metal</option>
                    <option value="progressive-metal">Progressive Metal</option>
                    <option value="symphonic-metal">Symphonic Metal</option>
                    <option value="folk-metal">Folk Metal</option>
                    <option value="gothic-metal">Gothic Metal</option>
                    <option value="speed-metal">Speed Metal</option>
                    <option value="nu-metal">Nu Metal</option>
                    <option value="industrial-metal">Industrial Metal</option>
                    <option value="groove-metal">Groove Metal</option>
                    <option value="metalcore">Metalcore</option>
                    <option value="deathcore">Deathcore</option>
                    <option value="sludge-metal">Sludge Metal</option>
                    <option value="viking-metal">Viking Metal</option>
                    <option value="melodic-death-metal">Melodic Death Metal</option>
                </optgroup>
            </select>
        </div>
    );
}

export default Select;
