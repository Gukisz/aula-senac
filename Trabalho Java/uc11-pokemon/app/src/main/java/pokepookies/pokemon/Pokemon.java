package pokepookies.pokemon;

public class Pokemon {
    protected int    id;
    protected String name;
    protected int    level;
    protected String type;
    
    public Pokemon(int id, String name, String type, int level)
    {
        this.id    = id;
        this.name  = name;
        this.level = level;
        this.type  = type;
    }
    
    public String getName()  { return this.name;  }
    public int    getLevel() { return this.level; }
    public String getType()  { return this.type;  }
    public int    getId()    { return this.id;    }
};
