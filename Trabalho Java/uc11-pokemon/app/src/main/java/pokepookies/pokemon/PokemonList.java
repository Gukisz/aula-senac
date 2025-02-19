package pokepookies.pokemon;

import pokepookies.cLog;

import java.util.ArrayList;

public class PokemonList {
    private final javax.swing.DefaultListModel<String> displayList;
    private final ArrayList<Pokemon>      pokemons;
    private final int                     maxPokemons;
    private final boolean                 infinity;
    
    public int getMaxPokemons()
    {
        if (this.infinity) return Integer.MAX_VALUE;
        return this.maxPokemons;
    }
    
    public PokemonList(int maxPokemons, boolean infinity, javax.swing.DefaultListModel<String> displayList)
    {
        this.pokemons    = new ArrayList<>();
        this.displayList = displayList;
        this.maxPokemons = maxPokemons;
        this.infinity    = infinity;
        
        cLog.dbg("PokemonList::PokemonList(maxPokemons: %d, infinity: %s): Successfully initialized object.", maxPokemons, infinity ? "true" : "false");
    }
        
    public boolean addPokemon(Pokemon pokemon)
    {
        if ((!this.infinity && this.pokemons.size() >= this.maxPokemons)) {
            cLog.warn("PokemonList::addPokemon(pokemon: %s): Too many entries on list (W001).", pokemon.getName());
            return false;
        }
        
        if (pokemon == null) {
            cLog.err("PokemonList::addPokemon(pokemon: %s): Null pointer argument (E002).", pokemon.getName());
            return false;
        }
        
        cLog.dbg("PokemonList::addPokemon(pokemon: %s): Successfully runned.", pokemon.getName());
        
        this.displayList.addElement(pokemon.getName());
        return this.pokemons.add(pokemon);
    }
    
    public Pokemon getPokemon(int idx)
    {
        if (idx < 0 || idx > this.pokemons.size()){
            cLog.err("PokemonList::getPokemon(idx: %d): Index out of bounds (E001).", idx);
            return null;
        }
        
        cLog.dbg("PokemonList::getPokemon(idx: %d): Successfully runned.", idx);        
        return this.pokemons.get(idx);
    }
    
    public Pokemon pickPokemon(int idx)
    {
        if (idx < 0 || idx > this.pokemons.size()) {
            cLog.err("PokemonList::pickPokemon(idx: %d): Index out of bounds (E001).", idx);
            return null;
        }        
        
        cLog.dbg("PokemonList::pickPokemon(idx: %d): Sucessfully runned.", idx);
        
        this.displayList.remove(idx);
        return this.pokemons.remove(idx);
    }
    
    public boolean exchangePokemons(PokemonList other, int idx)
    {
        Pokemon pokemon = this.getPokemon(idx);
        if (pokemon == null) {
            cLog.err("PokemonList::exchangePokemon(other[idx: %d]: NULL): Null pointer return (E003).", idx);
            return false;
        }
        
        if (other.addPokemon(pokemon) == false) {
            cLog.err("PokemonList::exchangePokemon(other[idx: %d]: %s): Too many entries on array list (E0A2).", idx, pokemon.getName());
            return false;
        }
        
        this.displayList.remove(idx);
        this.pokemons.remove(idx);
        
        cLog.dbg("PokemonList::exchangePokemon(other[idx: %d]: %s): Successfully runned.", idx, pokemon.getName());
        return true;
    }
};