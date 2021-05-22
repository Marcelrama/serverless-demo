const Utils = {
     ConvertKeyValue: function(obj,arrayDTO) {
        return  Object.fromEntries(
            Object.entries(obj)
            .map(([k, v]) => [arrayDTO.get(k) || k, v])
        )}
};

module.exports = Utils;
