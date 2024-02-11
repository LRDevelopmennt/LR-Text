local function openText(label, info)
    SendNUIMessage({
        action = "openText",
        label = label,
        info = info,
    })
end

local function closeText()
    SendNUIMessage({
        action = "closeText"
    })
end

exports("openText", openText)
exports("closeText", closeText)