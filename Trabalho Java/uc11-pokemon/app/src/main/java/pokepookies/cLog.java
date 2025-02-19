package pokepookies;

public class cLog {
    public enum Level {
        DBG, INFO, WARN, ERR, UNK
    };
    
    private static String levelStr(Level lvl)
    {
        return switch (lvl) {
            case DBG  -> "DBG";
            case INFO -> "INF";
            case WARN -> "WARN";
            case ERR  -> "ERR";
            default   -> "UNK";
        };
    }
    
    public static void dbg(String fmt, Object... args)
    {
        cLog.println(Level.DBG, fmt, args);
    }
    
    public static void info(String fmt, Object... args)
    {
        cLog.println(Level.INFO, fmt, args);
    }
    
    public static void warn(String fmt, Object... args)
    {
        cLog.println(Level.WARN, fmt, args);
    }
    
    public static void err(String fmt, Object... args)
    {
       cLog.println(Level.ERR, fmt, args);
    }
    
    public static void println(Level lvl, String fmt, Object... args)
    {
        var out = System.out;
        if (lvl == Level.ERR || lvl == Level.WARN)
            out = System.err;
        
        out.printf("cLog::%s:", cLog.levelStr(lvl));
        out.printf(fmt, args);
        out.append('\n');
        out.flush();
    }
};